const week5Questions = [
    {
        question:
            "Which EIGRP table contains all learned routes, including both the best path (Successor) and any potential backup paths (Feasible Successors)?",
        options: [
            "The Neighbor Table",
            "The Routing Table",
            "The Topology Table",
            "The Adjacency Table"
        ],
        answer: "The Topology Table",
        explanation:
            "The Topology Table is the 'brain' of EIGRP, storing every route learned from neighbors before the DUAL algorithm selects the best ones for the routing table. It is viewed with `show ip eigrp topology`."
    },
    {
        question:
            "What is the EIGRP Feasibility Condition, which must be met for a route to be considered a loop-free Feasible Successor?",
        options: [
            "The neighbor's Advertised Distance must be greater than the current Feasible Distance.",
            "The neighbor's Advertised Distance must be less than the current Feasible Distance.",
            "The neighbor must have a lower router ID.",
            "The neighbor's metric must be exactly the same as the current metric."
        ],
        answer: "The neighbor's Advertised Distance must be less than the current Feasible Distance.",
        explanation:
            "The golden rule for a loop-free backup path is AD < FD. The advertised distance from the neighbor must be less than my own current best distance to the destination."
    },
    {
        question:
            "In EIGRP, what does the 'Feasible Distance' (FD) represent?",
        options: [
            "The metric that a neighbor router advertises to you.",
            "Your router's total calculated metric to reach a destination network.",
            "The number of feasible successors available for a route.",
            "A special metric used only when a route is down."
        ],
        answer: "Your router's total calculated metric to reach a destination network.",
        explanation:
            "Feasible Distance is your own, local perspective of the total cost to get to a destination. The FD of the successor is the metric that is placed in the routing table."
    },
    {
        question:
            "What is the most important, unwritten rule at the end of every Access Control List?",
        options: [
            "An implicit 'permit any'.",
            "An implicit 'log all activity'.",
            "An implicit 'deny any'.",
            "An implicit 'ask for password'."
        ],
        answer: "An implicit 'deny any'.",
        explanation:
            "Every ACL ends with an invisible `deny ip any any`. If a packet doesn't match any of your explicit `permit` statements, it will be dropped. This is why every ACL needs at least one `permit` line to allow any traffic."
    },
    {
        question:
            "A standard ACL (e.g., access-list 10) can filter network traffic based on what single criterion?",
        options: [
            "Source IP address only",
            "Destination IP address only",
            "Source and Destination IP address",
            "Destination port number"
        ],
        answer: "Source IP address only",
        explanation:
            "Standard ACLs are simple and can only inspect the source IP address of a packet. They cannot check for destination, protocol, or port numbers."
    },
    {
        question:
            "Where is the recommended place to apply an extended ACL?",
        options: [
            "As close to the destination as possible.",
            "On the router with the highest CPU.",
            "As close to the source as possible.",
            "On all interfaces of all routers."
        ],
        answer: "As close to the source as possible.",
        explanation:
            "Because extended ACLs are very specific, they should be placed close to the source of the traffic. This allows unwanted packets to be dropped early, saving network bandwidth."
    },
    {
        question:
            "Which command correctly applies ACL number 150 to filter traffic entering the GigabitEthernet0/0 interface?",
        options: [
            "access-list 150 in on GigabitEthernet0/0",
            "interface g0/0 / use acl 150 in",
            "ip access-group 150 in",
            "apply access-control 150 input"
        ],
        answer: "ip access-group 150 in",
        explanation:
            "The `ip access-group` command is used within the interface configuration mode to apply a previously created ACL in either the 'in' or 'out' direction."
    },
    {
        question:
            "Which of the following can an Extended ACL use to filter traffic that a Standard ACL cannot?",
        options: [
            "Source IP address",
            "Destination TCP port number",
            "Time of day",
            "Packet size"
        ],
        answer: "Destination TCP port number",
        explanation:
            "Extended ACLs provide much greater granularity by allowing filtering based on protocol (TCP/UDP), and source/destination port numbers, in addition to source and destination IPs."
    },
    {
        question:
            "Which two parameters MUST match for two routers to form an EIGRP adjacency?",
        options: [
            "Router Hostname and Interface Delay",
            "Interface Bandwidth and MTU",
            "Router-ID and Software Version",
            "Autonomous System (AS) Number and K-values"
        ],
        answer: "Autonomous System (AS) Number and K-values",
        explanation:
            "Two routers must be in the same AS and have identical K-values (metric weights) to become EIGRP neighbors. A mismatch in either will prevent an adjacency from forming."
    },
    {
        question:
            "How does a router process the statements within a single Access Control List?",
        options: [
            "It finds the most specific match first.",
            "It processes them sequentially from top to bottom, stopping at the first match.",
            "It processes all deny statements first, then all permit statements.",
            "It processes them in a random order to improve security."
        ],
        answer: "It processes them sequentially from top to bottom, stopping at the first match.",
        explanation:
            "ACLs are processed in a strict, sequential order. The first line that a packet matches determines its fate (`permit` or `deny`), and no further lines in the ACL are checked for that packet."
    }
];

export default week5Questions;