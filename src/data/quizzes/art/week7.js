const week7Questions = [
    {
        question:
            "What is the primary metric used by OSPF to determine the best path?",
        options: [
            "Hop Count",
            "Cost",
            "Delay",
            "Reliability"
        ],
        answer: "Cost",
        explanation:
            "OSPF uses a metric called 'Cost,' which is calculated based on the bandwidth of the interface. A lower cost indicates a better, higher-bandwidth path."
    },
    {
        question:
            "What is the fundamental difference between a link-state protocol like OSPF and a distance-vector protocol like RIP?",
        options: [
            "OSPF is faster, but RIP is more reliable.",
            "OSPF routers build a complete topological map of the area, while RIP routers only know what their neighbors tell them.",
            "OSPF uses hop count, while RIP uses bandwidth.",
            "OSPF is Cisco-proprietary, while RIP is an open standard."
        ],
        answer: "OSPF routers build a complete topological map of the area, while RIP routers only know what their neighbors tell them.",
        explanation:
            "This is the core difference. Link-state gives every router a full 'GPS map' (the LSDB), whereas distance-vector operates on 'routing by rumor.'"
    },
    {
        question:
            "On a multi-access network like Ethernet, what is the primary purpose of electing a Designated Router (DR) and Backup Designated Router (BDR)?",
        options: [
            "To increase the speed of the network.",
            "To provide a single point of failure for security.",
            "To reduce the number of required OSPF adjacencies and control LSA flooding.",
            "To assign IP addresses to the other routers."
        ],
        answer: "To reduce the number of required OSPF adjacencies and control LSA flooding.",
        explanation:
            "Without a DR/BDR, all routers on the segment would form adjacencies with each other, creating an inefficient mesh. The DR acts as a central point for updates, drastically reducing protocol traffic."
    },
    {
        question:
            "If all routers on a LAN segment have the same OSPF interface priority, how is the Designated Router (DR) elected?",
        options: [
            "The router with the fastest CPU wins.",
            "The router with the most interfaces wins.",
            "The router with the lowest MAC address wins.",
            "The router with the highest Router ID wins."
        ],
        answer: "The router with the highest Router ID wins.",
        explanation:
            "The election process first checks for the highest priority. If there is a tie (as is common with the default priority of 1), the highest Router ID is used as the tie-breaker."
    },
    {
        question:
            "Which command do you use to verify OSPF neighbor relationships and see which router is the DR and BDR?",
        options: [
            "show ip route ospf",
            "show running-config",
            "show ip ospf neighbor",
            "show ip ospf database"
        ],
        answer: "show ip ospf neighbor",
        explanation:
            "`show ip ospf neighbor` displays the neighbor table, which includes the neighbor's ID, priority, current state (e.g., FULL/DR), and interface."
    },
    {
        question:
            "After a router builds its Link-State Database (LSDB), what algorithm does it run to calculate the best paths to all destinations?",
        options: [
            "DUAL Algorithm",
            "Bellman-Ford Algorithm",
            "Shortest Path First (SPF) Algorithm",
            "Spanning Tree Protocol (STP)"
        ],
        answer: "Shortest Path First (SPF) Algorithm",
        explanation:
            "OSPF stands for Open Shortest Path First. Each router independently runs the SPF (Dijkstra's) algorithm on its identical LSDB to compute its unique, loop-free routing table."
    },
    {
        question:
            "In a hierarchical OSPF design, all non-backbone areas must connect to which special area?",
        options: [
            "Area 1",
            "Area 0",
            "The Stub Area",
            "The Transit Area"
        ],
        answer: "Area 0",
        explanation:
            "Area 0 is the 'backbone area' and is the core of an OSPF network. All other areas must have a physical or virtual link to Area 0 to ensure proper routing between areas."
    },
    {
        question:
            "Which of the following is NOT a parameter that must match for two OSPF routers to become neighbors?",
        options: [
            "Area ID",
            "Hello and Dead timers",
            "Router Process ID",
            "Subnet Mask"
        ],
        answer: "Router Process ID",
        explanation:
            "The OSPF Process ID (from the `router ospf [id]` command) is locally significant only and does not need to match between routers. All other listed parameters must be identical on the link."
    },
    {
        question:
            "When you view a routing table, what letter code signifies a route learned through OSPF?",
        options: [
            "R",
            "E",
            "S",
            "O"
        ],
        answer: "O",
        explanation:
            "The letter 'O' represents a route learned via OSPF. 'R' is for RIP, 'E' is for EGP (or EIGRP External), and 'S' is for Static."
    },
    {
        question:
            "A router's OSPF cost is calculated as 'Reference Bandwidth / Interface Bandwidth'. If the default reference bandwidth is 100 Mbps, what would be the cost of a 1 Gbps (1000 Mbps) interface?",
        options: [
            "10",
            "100",
            "1",
            "0"
        ],
        answer: "1",
        explanation:
            "The cost is an integer value. 100 Mbps / 1000 Mbps = 0.1. Since the result must be at least 1, the calculated cost is rounded up to 1. This highlights why the reference bandwidth needs to be adjusted for modern networks."
    }
];

export default week7Questions;