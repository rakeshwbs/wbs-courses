const week10Questions = [
    {
        question:
            "What is the primary purpose of Policy-Based Routing (PBR)?",
        options: [
            "To choose the path with the highest bandwidth.",
            "To override the router's normal destination-based forwarding decision based on other criteria, like source IP.",
            "To automatically summarize routes.",
            "To provide encryption for routing updates."
        ],
        answer: "To override the router's normal destination-based forwarding decision based on other criteria, like source IP.",
        explanation:
            "PBR is a specialized tool that allows an administrator to create a policy that forces specific traffic to take a path that may be different from the one in the main routing table."
    },
    {
        question:
            "Which command is used on an interface to apply a PBR policy that was created with a route-map?",
        options: [
            "ip route-map [map-name] in",
            "ip access-group [map-name] in",
            "ip policy route-map [map-name]",
            "pbr enable [map-name]"
        ],
        answer: "ip policy route-map [map-name]",
        explanation:
            "After defining the policy in a route-map, the `ip policy route-map` command is used on the incoming interface to activate PBR for traffic arriving on that interface."
    },
    {
        question:
            "Border Gateway Protocol (BGP) is primarily used for what function in global networking?",
        options: [
            "To provide routing within a small office network.",
            "To assign IP addresses to hosts.",
            "To exchange routing information between different Autonomous Systems (e.g., between ISPs).",
            "To calculate the fastest possible path based on link speed."
        ],
        answer: "To exchange routing information between different Autonomous Systems (e.g., between ISPs).",
        explanation:
            "BGP is the de-facto Exterior Gateway Protocol (EGP) for the internet, designed for the massive scale of routing between independent networks, not for path optimization within a single network."
    },
    {
        question:
            "When is an eBGP (External BGP) peering session used?",
        options: [
            "Between two routers within the same company.",
            "Between a router and a switch.",
            "Between two routers in different Autonomous Systems.",
            "Only for IPv6 networks."
        ],
        answer: "Between two routers in different Autonomous Systems.",
        explanation:
            "eBGP is specifically for sessions between different AS numbers, for example, a company peering with its Internet Service Provider."
    },
    {
        question:
            "A router in AS 65001 learns a route from its ISP in AS 30722. It must then share this route with other routers inside AS 65001. Which protocol is used for this internal sharing?",
        options: [
            "eBGP",
            "OSPF",
            "iBGP",
            "RIP"
        ],
        answer: "iBGP",
        explanation:
            "iBGP (Internal BGP) is used to carry BGP path information across the routers within a single Autonomous System to ensure all routers have consistent external routing information."
    },
    {
        question:
            "What is the Administrative Distance of a route learned via eBGP?",
        options: [
            "200",
            "110",
            "90",
            "20"
        ],
        answer: "20",
        explanation:
            "eBGP routes are given a very low AD of 20, making them highly trustworthy. This ensures that the path to an external network learned from an ISP is preferred over any potentially looped-back internal route."
    },
    {
        question:
            "Which command is used to check the status of all BGP peering sessions on a router and see how many prefixes have been received from each neighbor?",
        options: [
            "show ip route bgp",
            "show ip bgp neighbors",
            "show ip bgp summary",
            "show ip interface brief"
        ],
        answer: "show ip bgp summary",
        explanation:
            "`show ip bgp summary` provides a concise, one-line view of each neighbor, its AS number, and the state of the session, making it the primary command for checking BGP connectivity."
    },
    {
        question:
            "What does the iBGP Split-Horizon rule state?",
        options: [
            "A route learned via eBGP cannot be advertised to an iBGP peer.",
            "A route learned from one iBGP peer will not be advertised to another iBGP peer.",
            "iBGP neighbors must be directly connected.",
            "All iBGP neighbors must share the same router ID."
        ],
        answer: "A route learned from one iBGP peer will not be advertised to another iBGP peer.",
        explanation:
            "This rule is a loop-prevention mechanism within an AS. It necessitates a full mesh of iBGP peers (or the use of route reflectors) to ensure all iBGP speakers receive all updates."
    },
    {
        question:
            "OSPF and EIGRP are classified as Interior Gateway Protocols (IGPs). How is BGP classified?",
        options: [
            "Also an IGP",
            "A Link-State Protocol",
            "An Exterior Gateway Protocol (EGP)",
            "A Hybrid Protocol"
        ],
        answer: "An Exterior Gateway Protocol (EGP)",
        explanation:
            "BGP is the only EGP in widespread use today. Its entire purpose is to route between different autonomous systems, which is the definition of an exterior protocol."
    },
    {
        question:
            "In the BGP command `neighbor 1.1.1.1 remote-as 65002`, what determines whether this will be an eBGP or iBGP session?",
        options: [
            "The IP address 1.1.1.1.",
            "The fact that the command is `neighbor`.",
            "The remote-as number (65002) being different from or the same as the local router's AS number.",
            "The subnet mask of the neighbor."
        ],
        answer: "The remote-as number (65002) being different from or the same as the local router's AS number.",
        explanation:
            "If the `remote-as` number matches the local `router bgp [as]` number, it's an iBGP peering. If it's different, it's an eBGP peering. This is the defining parameter."
    }
];

export default week10Questions;