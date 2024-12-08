module Project {

    use std::string;
    use std::vector;
    use std::option::{Option, some, none};
    use std::table;

    struct Bounty has copy, drop, store {
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string,
        complete: bool,
    }

    struct Bounties has key {
        maintainer: address,
        bounties: vector<Bounty>,
    }

    struct Contributors has key {
        contributor_usernames: table::Table<address, string>,
        applied: table::Table<address, bool>,
    }

    public entry fun initialize(account: &signer) {
        let maintainer = signer::address_of(account);

        move_to<Bounties>(maintainer, Bounties {
            maintainer,
            bounties: vector::empty<Bounty>(),
        });

        move_to<Contributors>(maintainer, Contributors {
            contributor_usernames: table::new<address, string>(),
            applied: table::new<address, bool>(),
        });
    }

    public entry fun apply_bounty(account: &signer, github_username: string) {
        let addr = signer::address_of(account);
        let contributors = &mut borrow_global_mut<Contributors>(addr);

        assert!(
            !table::contains(&contributors.applied, addr),
            "You have already applied to this bounty"
        );
        assert!(!string::is_empty(&github_username), "GitHub username is required");

        table::add(&mut contributors.applied, addr, true);
        table::add(&mut contributors.contributor_usernames, addr, github_username);
    }

    public entry fun create_bounty(
        account: &signer,
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string
    ) {
        let maintainer = signer::address_of(account);
        let bounties = &mut borrow_global_mut<Bounties>(maintainer);

        assert!(
            bounties.maintainer == maintainer,
            "Restricted to maintainer"
        );

        vector::push_back(&mut bounties.bounties, Bounty {
            description,
            issue_id,
            bounty_amount,
            repo,
            username,
            complete: false,
        });
    }

    public fun get_bounties_count(account: address): u64 {
        let bounties = borrow_global<Bounties>(account);
        vector::length(&bounties.bounties)
    }
}
