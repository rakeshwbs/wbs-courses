const week4Questions = [
    {
        question:
            "What is the most significant advantage of RIPv2 over RIPv1?",
        options: [
            "It has a higher hop count limit.",
            "It converges much faster.",
            "It is a classless protocol that supports VLSM.",
            "It uses bandwidth as its metric."
        ],
        answer: "It is a classless protocol that supports VLSM.",
        explanation:
            "The primary reason for developing RIPv2 was to overcome the classful limitations of RIPv1. By including the subnet mask in updates, RIPv2 supports modern, efficient IP addressing schemes like VLSM."
    },
    {
        question:
            "Instead of broadcasting updates, RIPv2 sends them to a specific multicast address. What is this address?",
        options: [
            "255.255.255.255",
            "224.0.0.5",
            "224.0.0.10",
            "224.0.0.9"
        ],
        answer: "224.0.0.9",
        explanation:
            "RIPv2 uses the designated multicast address 224.0.0.9. This is more efficient than RIPv1's broadcast address because only RIPv2-enabled routers will process the packets."
    },
    {
        question:
            "By default, EIGRP calculates its composite metric using which two parameters?",
        options: [
            "Hop Count and Delay",
            "Bandwidth and Delay",
            "Bandwidth and MTU",
            "Reliability and Hop Count"
        ],
        answer: "Bandwidth and Delay",
        explanation:
            "EIGRP uses a sophisticated composite metric that, by default, is based on the lowest bandwidth along the path and the cumulative delay of the path, resulting in more intelligent path selection than RIP."
    },
    {
        question:
            "What is the name of the algorithm that provides EIGRP with rapid, loop-free convergence?",
        options: [
            "Dijkstra's Algorithm",
            "Bellman-Ford Algorithm",
            "Diffusing Update Algorithm (DUAL)",
            "Rapid Spanning Tree Protocol (RSTP)"
        ],
        answer: "Diffusing Update Algorithm (DUAL)",
        explanation:
            "DUAL is the engine behind EIGRP. Its ability to pre-calculate a loop-free backup path (the Feasible Successor) is what allows for such fast convergence times."
    },
    {
        question:
            "After configuring EIGRP, which command would you use to verify that routers have successfully formed adjacencies with their neighbors?",
        options: [
            "show ip route",
            "show ip protocols",
            "show ip eigrp neighbors",
            "show interfaces"
        ],
        answer: "show ip eigrp neighbors",
        explanation:
            "The `show ip eigrp neighbors` command displays the neighbor table, which is populated via the EIGRP Hello protocol. It's the first place to check if EIGRP is working correctly."
    },
    {
        question:
            "In the output of `show ip route`, what letter code indicates a route that has been learned through EIGRP?",
        options: [
            "E",
            "S",
            "D",
            "R"
        ],
        answer: "D",
        explanation:
            "Routes learned via EIGRP are marked with a 'D', which stands for DUAL, its underlying algorithm. 'R' is for RIP, and 'S' is for Static."
    },
    {
        question:
            "In EIGRP terminology, what is a 'Feasible Successor'?",
        options: [
            "The primary, best path to a destination.",
            "A neighbor router that is not trusted.",
            "A pre-calculated, loop-free backup path to a destination.",
            "The next EIGRP update packet."
        ],
        answer: "A pre-calculated, loop-free backup path to a destination.",
        explanation:
            "The Feasible Successor is the key to EIGRP's fast convergence. It's a standby route that the router can use instantly if the primary route (the Successor) fails."
    },
    {
        question:
            "When configuring EIGRP on several routers, which parameter must be identical on all of them for them to form neighbor relationships?",
        options: [
            "The router's hostname",
            "The Autonomous System (AS) number",
            "The router-id",
            "The interface bandwidth"
        ],
        answer: "The Autonomous System (AS) number",
        explanation:
            "Routers will only become neighbors if they are configured in the same EIGRP Autonomous System. The command is `router eigrp [AS number]`."
    },
    {
        question:
            "What is the purpose of the `no auto-summary` command when configuring RIPv2 or EIGRP?",
        options: [
            "To enable manual summarization only.",
            "To turn off the routing protocol.",
            "To prevent the protocol from summarizing routes to their classful boundaries automatically.",
            "To force the protocol to use broadcast updates."
        ],
        answer: "To prevent the protocol from summarizing routes to their classful boundaries automatically.",
        explanation:
            "Disabling automatic summarization is a best practice in modern networks as it allows the protocol to carry specific subnet information across major network boundaries, which is essential for VLSM."
    },
    {
        question:
            "Which statement best describes how EIGRP handles routing updates?",
        options: [
            "It sends its full routing table to all neighbors every 30 seconds.",
            "It sends partial updates about specific changes only to affected routers.",
            "It never sends updates; administrators must configure changes manually.",
            "It broadcasts its full routing table whenever a link fails."
        ],
        answer: "It sends partial updates about specific changes only to affected routers.",
        explanation:
            "EIGRP is very efficient. Unlike RIP, it doesn't send periodic full updates. It only sends partial (only the changed route) and bounded (only to affected routers) updates when a network topology change occurs."
    }
];

export default week4Questions;