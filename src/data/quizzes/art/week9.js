const week9Questions = [
    {
        question:
            "What is the primary function of route redistribution?",
        options: [
            "To summarize multiple routes into a single advertisement.",
            "To filter unwanted traffic using an access list.",
            "To allow different routing protocols, like OSPF and EIGRP, to exchange routing information.",
            "To create a backup path in case the primary route fails."
        ],
        answer: "To allow different routing protocols, like OSPF and EIGRP, to exchange routing information.",
        explanation:
            "Redistribution acts as a translator, enabling routers in one routing domain to learn about the networks that exist in a completely different routing domain."
    },
    {
        question:
            "When redistributing routes into EIGRP, why is it mandatory to define a 'seed metric'?",
        options: [
            "To set the Administrative Distance of the route.",
            "Because the metrics of different protocols (like OSPF cost and EIGRP composite metric) are incompatible.",
            "To tell the router which interface to use.",
            "To prevent routing loops automatically."
        ],
        answer: "Because the metrics of different protocols (like OSPF cost and EIGRP composite metric) are incompatible.",
        explanation:
            "Since there's no way to translate a foreign metric, you must provide a starting 'seed' metric. Without it, EIGRP assumes the route has an infinite metric and will not install it in the topology table."
    },
    {
        question:
            "What is the purpose of the `subnets` keyword in the command `redistribute eigrp 100 subnets`?",
        options: [
            "It tells OSPF to only redistribute subnetted routes.",
            "It enables redistribution for IPv6 subnets only.",
            "It ensures that classless, individual subnets are advertised, not just the classful parent network.",
            "It sets the seed metric for all subnets to 20."
        ],
        answer: "It ensures that classless, individual subnets are advertised, not just the classful parent network.",
        explanation:
            "Without the `subnets` keyword, OSPF would only redistribute classful networks (e.g., 172.16.0.0), ignoring all the more specific subnets within it. This keyword is essential for modern networks."
    },
    {
        question:
            "What is the proper term for a router that performs redistribution between two different routing domains?",
        options: [
            "Area Border Router (ABR)",
            "Designated Router (DR)",
            "Autonomous System Boundary Router (ASBR)",
            "Internal Gateway Router (IGR)"
        ],
        answer: "Autonomous System Boundary Router (ASBR)",
        explanation:
            "An ASBR is a router that stands on the border of an autonomous system and connects to another AS, often one running a different routing protocol."
    },
    {
        question:
            "What is the default Administrative Distance of an external route learned by EIGRP (a 'D EX' route)?",
        options: [
            "90",
            "110",
            "170",
            "120"
        ],
        answer: "170",
        explanation:
            "EIGRP trusts its own internal routes (AD 90) far more than routes learned from an external source. The higher AD of 170 helps prevent loops by making external routes less preferred."
    },
    {
        question:
            "Which path control tool offers the most power and flexibility, allowing you to filter routes AND modify their attributes (like metric or tag) as they are being redistributed?",
        options: [
            "Standard ACL",
            "Extended ACL",
            "Distribute-List",
            "Route-Map"
        ],
        answer: "Route-Map",
        explanation:
            "Route-maps are like complex scripts for routes. They use `match` criteria (like an ACL) and `set` actions to provide granular control far beyond the simple permit/deny filtering of a distribute-list."
    },
    {
        question:
            "In the context of redistribution, what is a `distribute-list` used for?",
        options: [
            "To set the seed metric for redistributed routes.",
            "To use an Access Control List to filter which routes are allowed to be redistributed.",
            "To create a list of all routers in the network.",
            "To load balance traffic across multiple paths."
        ],
        answer: "To use an Access Control List to filter which routes are allowed to be redistributed.",
        explanation:
            "A distribute-list is a simple filtering mechanism that references an ACL to either permit or deny specific networks from being advertised or accepted by a routing process."
    },
    {
        question:
            "If you want to make OSPF learn routes from EIGRP, under which router configuration mode do you apply the `redistribute` command?",
        options: [
            "`router eigrp 100`",
            "`router ospf 1`",
            "`interface s0/0/0`",
            "`line console 0`"
        ],
        answer: "`router ospf 1`",
        explanation:
            "Redistribution is configured under the protocol process that is *receiving* the routes. To inject routes *into* OSPF, you configure the command under `router ospf`."
    },
    {
        question:
            "What is the primary danger of implementing two-way redistribution between two or more routers without careful filtering?",
        options: [
            "High CPU utilization",
            "Routing feedback loops",
            "Interface errors",
            "Authentication failures"
        ],
        answer: "Routing feedback loops",
        explanation:
            "Without proper controls, a route from Protocol A can be injected into Protocol B, then re-injected back into Protocol A from another router with a potentially better metric, creating a persistent and catastrophic routing loop."
    },
    {
        question:
            "By default, what cost metric does OSPF assign to routes redistributed from another IGP like EIGRP or RIP?",
        options: [
            "1",
            "100",
            "20",
            "It inherits the metric from the source protocol."
        ],
        answer: "20",
        explanation:
            "OSPF has a default seed metric of 20 for all redistributed routes (except BGP). This ensures the routes are not discarded, but it's often best practice to set a more appropriate metric with a route map."
    }
];

export default week9Questions;