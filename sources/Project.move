module Project {

    use std::string;
    use std::vector;
    use std::option::{Option, some, none};

    /// Maintainer address
    address public maintainer;

    /// Struct for a Bounty
    struct Bounty has copy, drop, store {
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string,
        complete: bool,
    }

    /// Resource storing all bounties
    struct Bounties has key {
        bounties: vector<Bounty>,
    }

    /// Resource storing contributor details
    struct Contributors has key {
        contributor_usernames: table::Table<address, string>,
        applied: table::Table<address, bool>,
    }

    /// Initialize the module and set the maintainer
    public entry fun initialize(maintainer: address) {
        move_to<Bounties>(maintainer, Bounties { bounties: vector::empty<Bounty>() });
        move_to<Contributors>(maintainer, Contributors {
            contributor_usernames: table::new<address, string>(),
            applied: table::new<address, bool>(),
        });
        Self::maintainer = maintainer;
    }

    /// Apply for a bounty
    public entry fun apply_bounty(account: &signer, github_username: string) {
        let addr = signer::address_of(account);
        let contributors = &mut borrow_global_mut<Contributors>(Self::maintainer);

        assert!(
            !table::contains(&contributors.applied, addr),
            "You have already applied to this bounty"
        );
        assert!(!string::is_empty(&github_username), "GitHub username is required");

        table::add(&mut contributors.applied, addr, true);
        table::add(&mut contributors.contributor_usernames, addr, github_username);
    }

    /// Create a new bounty
    public entry fun create_bounty(
        account: &signer,
        description: string,
        issue_id: u64,
        bounty_amount: u64,
        repo: string,
        username: string
    ) {
        assert!(
            signer::address_of(account) == Self::maintainer,
            "Restricted to maintainer"
        );

        let bounties = &mut borrow_global_mut<Bounties>(Self::maintainer);

        vector::push_back(&mut bounties.bounties, Bounty {
            description,
            issue_id,
            bounty_amount,
            repo,
            username,
            complete: false,
        });
    }

    /// Retrieve the number of bounties
    public fun get_bounties_count(): u64 {
        let bounties = borrow_global<Bounties>(Self::maintainer);
        vector::length(&bounties.bounties)
    }
}
