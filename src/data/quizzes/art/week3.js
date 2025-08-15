const week3Questions = [
    {
        question:
            "What is the sole metric that RIP (Routing Information Protocol) uses to determine the best path to a destination network?",
        options: [
            "Bandwidth",
            "Link Speed",
            "Hop Count",
            "Latency"
        ],
        answer: "Hop Count",
        explanation:
            "RIP's only metric is the number of routers (hops) a packet must cross. It always chooses the path with the fewest hops, regardless of the link speed or quality."
    },
    {
        question:
            "Why is RIPv1 considered a 'classful' routing protocol?",
        options: [
            "It can only be used on Class A, B, or C networks.",
            "It does not send subnet mask information in its routing updates.",
            "It is the best in its class of protocols.",
            "It requires a password for configuration."
        ],
        answer: "It does not send subnet mask information in its routing updates.",
        explanation:
            "Because RIPv1 doesn't include subnet masks in its updates, it cannot support Variable Length Subnet Masking (VLSM) and assumes all devices on a network are using the same default classful mask."
    },
    {
        question:
            "Which command would you use on a Cisco router to see a summary of all active routing protocols, their configured timers, and the networks they are advertising?",
        options: [
            "show ip route",
            "show running-config",
            "show interfaces",
            "show ip protocols"
        ],
        answer: "show ip protocols",
        explanation:
            "`show ip protocols` is a primary verification tool that provides a detailed summary specifically for the routing protocols running on the device."
    },
    {
        question:
            "Which of the following is a loop-prevention mechanism where a router refuses to advertise a route back out of the same interface from which it was learned?",
        options: [
            "Route Poisoning",
            "Hold-down Timer",
            "Split Horizon",
            "Maximum Hop Count"
        ],
        answer: "Split Horizon",
        explanation:
            "Split Horizon is a fundamental rule in distance-vector protocols that prevents simple, two-router loops by not sending information back to its source."
    },
    {
        question:
            "In RIP, what does a hop count of 16 signify?",
        options: [
            "The best possible route.",
            "A route that is 16 hops away.",
            "The maximum valid distance for a route.",
            "The network is unreachable (infinite metric)."
        ],
        answer: "The network is unreachable (infinite metric).",
        explanation:
            "The maximum valid hop count in RIP is 15. A metric of 16 is used to explicitly mark a network as down or unreachable, a key part of the route poisoning process."
    },
    {
        question:
            "By default, how often does a RIP-enabled router send its routing updates to its neighbors?",
        options: [
            "Every 10 seconds",
            "Every 90 seconds",
            "Every 30 seconds",
            "Only when a topology change occurs"
        ],
        answer: "Every 30 seconds",
        explanation:
            "The default Update timer for RIP is 30 seconds, meaning the entire routing table is broadcast to neighbors at this interval."
    },
    {
        question:
            "What is the primary risk of using the `debug ip rip` command on a busy production router?",
        options: [
            "It will erase the startup configuration.",
            "It can cause high CPU utilization, potentially crashing the router.",
            "It automatically shuts down all interfaces.",
            "It introduces routing loops into the network."
        ],
        answer: "It can cause high CPU utilization, potentially crashing the router.",
        explanation:
            "Debug commands generate a lot of output and consume significant CPU resources. They are powerful troubleshooting tools but should be used with extreme caution on live equipment."
    },
    {
        question:
            "When a router running RIP learns that a connected network has failed, it immediately advertises this network to its neighbors with a metric of 16. What is this process called?",
        options: [
            "Split Horizon",
            "Route Summarization",
            "Hold-down",
            "Route Poisoning"
        ],
        answer: "Route Poisoning",
        explanation:
            "Route poisoning is the proactive process of advertising a failed route with an infinite metric to ensure that all neighbors are quickly and explicitly informed that the route is no longer valid."
    },
    {
        question:
            "Which command correctly enables RIP and tells it to advertise the classful network 172.16.0.0?",
        options: [
            "router rip / network 172.16.0.0",
            "enable rip / route 172.16.0.0",
            "router rip, then network 172.16.0.0",
            "start rip on 172.16.0.0"
        ],
        answer: "router rip, then network 172.16.0.0",
        explanation:
            "First, you enter the routing protocol configuration mode with `router rip`. Then, from within that mode, you specify which classful networks to include with the `network` command."
    },
    {
        question:
            "The fundamental logic of a distance-vector protocol, where a router only knows what its neighbors tell it without having a full map of the topology, is often described as:",
        options: [
            "Routing by map",
            "Routing by rumor",
            "Routing by committee",
            "Routing by exception"
        ],
        answer: "Routing by rumor",
        explanation:
            "This analogy captures the essence of distance-vector protocols. Each router trusts its neighbors' information without having firsthand knowledge of the entire network layout, just like hearing a rumor."
    }
];

export default week3Questions;