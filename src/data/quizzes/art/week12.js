const week12Questions = [
    {
        question:
            "Which of the following routing protocols has the most preferred (lowest) default Administrative Distance for internal routes?",
        options: [
            "OSPF",
            "RIPv2",
            "EIGRP",
            "iBGP"
        ],
        answer: "EIGRP",
        explanation:
            "Internal EIGRP has a default AD of 90, which is lower (and therefore more preferred) than OSPF (110), RIP (120), and iBGP (200)."
    },
    {
        question:
            "What is the primary reason for dividing a large OSPF network into multiple areas?",
        options: [
            "To allow the use of different metrics in different parts of the network.",
            "To improve scalability by reducing the size of the LSDB and the frequency of SPF calculations on routers.",
            "To connect to different ISPs.",
            "To enable authentication between routers."
        ],
        answer: "To improve scalability by reducing the size of the LSDB and the frequency of SPF calculations on routers.",
        explanation:
            "OSPF areas create a hierarchical design. This limits intensive LSA flooding and SPF calculations to within a single area, making the protocol much more efficient in large networks."
    },
    {
        question:
            "What is a 'Feasible Successor' in the context of the EIGRP routing protocol?",
        options: [
            "The primary, best route to a destination.",
            "A neighbor router that has failed.",
            "A pre-calculated, guaranteed loop-free backup path.",
            "A route that has been learned from OSPF."
        ],
        answer: "A pre-calculated, guaranteed loop-free backup path.",
        explanation:
            "The DUAL algorithm finds the best path (the Successor) and a backup path (the Feasible Successor). This allows EIGRP to converge almost instantly if the primary path fails."
    },
    {
        question:
            "When redistributing routes from OSPF into EIGRP, what is a mandatory configuration step?",
        options: [
            "Setting the OSPF process ID to match the EIGRP AS number.",
            "Using the `subnets` keyword.",
            "Disabling split-horizon on all interfaces.",
            "Defining a seed metric for the redistributed routes."
        ],
        answer: "Defining a seed metric for the redistributed routes.",
        explanation:
            "Because EIGRP's composite metric is incompatible with OSPF's cost, you must manually provide a starting (seed) metric. Without it, EIGRP assumes the routes are unreachable."
    },
    {
        question:
            "A home network in Mauritius has multiple devices (laptops, phones) all accessing the internet through a single public IP address from MyT. Which technology makes this possible?",
        options: [
            "Static NAT",
            "Dynamic NAT",
            "Port Address Translation (PAT)",
            "Policy-Based Routing (PBR)"
        ],
        answer: "Port Address Translation (PAT)",
        explanation:
            "PAT, or NAT Overload, is the technology that allows multiple private IPs to be mapped to a single public IP by using unique port numbers to track each individual session."
    },
    {
        question:
            "What is the primary purpose of the BGP `Local Preference` attribute?",
        options: [
            "To influence path selection on a single, local router.",
            "To provide loop prevention between Autonomous Systems.",
            "To influence the exit-path selection for an entire local AS.",
            "To tell a neighboring AS how to enter your network."
        ],
        answer: "To influence the exit-path selection for an entire local AS.",
        explanation:
            "Local Preference is advertised to all iBGP peers. By setting a higher local preference on routes from a preferred ISP, all routers in your AS will agree on which exit point to use."
    },
    {
        question:
            "What is the generally accepted best practice for placing an extended ACL?",
        options: [
            "As close to the source of the traffic as possible.",
            "As close to the destination of the traffic as possible.",
            "On the router with the lowest CPU usage.",
            "On all router interfaces."
        ],
        answer: "As close to the source of the traffic as possible.",
        explanation:
            "Because extended ACLs are very specific, placing them close to the source allows unwanted traffic to be dropped early, which saves bandwidth across the rest of the network."
    },
    {
        question:
            "A company wants to force all traffic from its guest Wi-Fi network to be sent directly to a specific firewall, bypassing the normal best path. Which technology is best suited for this task?",
        options: [
            "OSPF",
            "BGP",
            "Static Routing",
            "Policy-Based Routing (PBR)"
        ],
        answer: "Policy-Based Routing (PBR)",
        explanation:
            "PBR is designed for this exact scenario. It can identify traffic based on its source (the guest network) and apply a policy that overrides the routing table to forward it to a specific next-hop (the firewall)."
    },
    {
        question:
            "What is the primary loop-prevention mechanism in BGP?",
        options: [
            "Split Horizon",
            "Hold-down Timers",
            "The AS_PATH attribute",
            "A hop count limit of 15"
        ],
        answer: "The AS_PATH attribute",
        explanation:
            "A BGP router will not accept a route if it sees its own Autonomous System number already listed in the AS_PATH. This is the fundamental way BGP prevents routing loops between different ASes."
    },
    {
        question:
            "An administrator configures a `distribute-list` under a routing process. What is the function of this command?",
        options: [
            "To load balance traffic across multiple links.",
            "To use an ACL to filter which routes are advertised or accepted.",
            "To set a new metric for incoming routes.",
            "To summarize a range of network addresses."
        ],
        answer: "To use an ACL to filter which routes are advertised or accepted.",
        explanation:
            "A distribute-list is a filtering tool. It ties an access-list to the routing process to control which network prefixes are allowed to be learned or advertised."
    }
];

export default week12Questions;