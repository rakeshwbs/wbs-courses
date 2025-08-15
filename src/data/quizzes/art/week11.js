const week11Questions = [
    {
        question:
            "Which command is used to view the main BGP database, which contains all prefixes and their associated paths learned from all neighbors?",
        options: [
            "show ip route",
            "show ip bgp summary",
            "show ip bgp",
            "show ip eigrp topology"
        ],
        answer: "show ip bgp",
        explanation:
            "The `show ip bgp` command displays the BGP table (or RIB), which is the complete database of BGP information before the best-path algorithm is run. `show ip route` only shows the final best path."
    },
    {
        question:
            "According to the BGP best-path selection algorithm, which attribute is checked first when a router has learned multiple paths to the same destination?",
        options: [
            "Shortest AS_PATH",
            "Highest Local Preference",
            "Highest Weight",
            "Lowest MED"
        ],
        answer: "Highest Weight",
        explanation:
            "Weight is a Cisco-proprietary, locally significant attribute. Because it is checked first, it provides a powerful way for an administrator to force a specific router to prefer one path over all others."
    },
    {
        question:
            "What is the primary purpose of the BGP AS_PATH attribute?",
        options: [
            "To choose the path with the highest bandwidth.",
            "To provide a loop-prevention mechanism.",
            "To set a local policy on a single router.",
            "To carry the next-hop IP address."
        ],
        answer: "To provide a loop-prevention mechanism.",
        explanation:
            "The AS_PATH is a list of AS numbers a route has traversed. A router will refuse to accept any route that already contains its own AS number in the path, which is the fundamental way BGP avoids loops. It is also used as a metric (shorter is better)."
    },
    {
        question:
            "Which BGP attribute is used to influence the exit point for an entire Autonomous System and is only exchanged between iBGP peers?",
        options: [
            "Weight",
            "AS_PATH",
            "Local Preference",
            "MED"
        ],
        answer: "Local Preference",
        explanation:
            "Local Preference (default 100, higher is better) is the standard way to set a company-wide policy. By setting a higher local preference on routes from a preferred ISP, all iBGP routers in the AS will agree to use that exit path."
    },
    {
        question:
            "What is the scope of influence for the BGP `weight` attribute?",
        options: [
            "It is passed to all eBGP neighbors.",
            "It is passed to all iBGP neighbors.",
            "It is significant only to the local router on which it is configured.",
            "It is passed throughout the entire internet."
        ],
        answer: "It is significant only to the local router on which it is configured.",
        explanation:
            "Weight is a Cisco-proprietary attribute that is not advertised to any BGP neighbor. It provides a way to influence path selection on a single router without affecting any other router in the network."
    },
    {
        question:
            "For filtering BGP routes, what is the main advantage of using a `prefix-list` over a standard `access-list`?",
        options: [
            "Prefix-lists are easier to write.",
            "Prefix-lists can match on both the network address and the prefix-length.",
            "Only prefix-lists can be used in a route-map.",
            "Prefix-lists consume less memory."
        ],
        answer: "Prefix-lists can match on both the network address and the prefix-length.",
        explanation:
            "This makes prefix-lists far more flexible for BGP. For example, you can create a rule to permit `/24`s but deny `/25`s within the same larger block, which is impossible with a standard ACL."
    },
    {
        question:
            "In the `show ip bgp` output, what does the `>` symbol next to a path indicate?",
        options: [
            "The path is an eBGP path.",
            "The path is currently down.",
            "The path is the 'best' path that will be installed in the routing table.",
            "The path was learned from the neighbor with the highest IP."
        ],
        answer: "The path is the 'best' path that will be installed in the routing table.",
        explanation:
            "The `>` acts as a pointer, showing which of the multiple available paths for a prefix was selected as the best by the BGP path selection algorithm."
    },
    {
        question:
            "To modify the attributes of routes being *received* from a BGP neighbor, in which direction should you apply a route-map?",
        options: [
            "in",
            "out",
            "egress",
            "forward"
        ],
        answer: "in",
        explanation:
            "Applying a route-map with the `in` keyword processes routes as they are received from a neighbor, before they are placed in the BGP table. This is where you would set local attributes like weight or local preference."
    },
    {
        question:
            "After Weight and Local Preference, what is one of the most important default criteria BGP uses to select a path?",
        options: [
            "The path with the most AS numbers.",
            "The path with the highest metric.",
            "The path with the shortest AS_PATH.",
            "The path learned at the earliest time."
        ],
        answer: "The path with the shortest AS_PATH.",
        explanation:
            "A shorter AS_PATH is generally considered a better path. This is a fundamental metric for BGP and is checked after local policies like weight and local preference have been considered."
    },
    {
        question:
            "You want to force a specific router to prefer a path from Neighbor A over an identical path from Neighbor B. This policy should not affect any other routers. Which BGP attribute is the best tool for this job?",
        options: [
            "Local Preference",
            "AS_PATH Prepending",
            "Weight",
            "MED"
        ],
        answer: "Weight",
        explanation:
            "Because Weight is locally significant and is the very first tie-breaker, it is the perfect tool for influencing path selection on a single router without advertising that preference to any other BGP speakers."
    }
];

export default week11Questions;