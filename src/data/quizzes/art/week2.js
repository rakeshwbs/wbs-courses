const week2Questions = [
    {
        question:
            "Which command correctly configures a static route on a router to reach the 172.16.30.0/24 network via a next-hop router at 10.0.0.6?",
        options: [
            "ip route 172.16.30.0 255.255.255.0 10.0.0.6",
            "route add 172.16.30.0 mask 255.255.255.0 10.0.0.6",
            "ip route 10.0.0.6 255.255.255.255 172.16.30.0",
            "config route 172.16.30.0 255.255.255.0 to 10.0.0.6"
        ],
        answer: "ip route 172.16.30.0 255.255.255.0 10.0.0.6",
        explanation:
            "The correct syntax for a static route on a Cisco IOS router is `ip route [destination-network] [subnet-mask] [next-hop-address]`."
    },
    {
        question:
            "What is the default Administrative Distance (AD) of a static route?",
        options: [
            "0",
            "90",
            "1",
            "120"
        ],
        answer: "1",
        explanation:
            "A static route has an AD of 1, making it more trustworthy than any dynamically learned route (like EIGRP at 90 or OSPF at 110) but less trustworthy than a directly connected interface (AD of 0)."
    },
    {
        question:
            "A router receives a packet destined for a network that is NOT in its routing table, and no default route is configured. What will the router do with the packet?",
        options: [
            "Forward it out of all interfaces.",
            "Send it back to the source.",
            "Hold the packet until a route is learned.",
            "Drop the packet."
        ],
        answer: "Drop the packet.",
        explanation:
            "If a router has no information about how to reach a destination, it has no choice but to discard the packet. It will typically send an ICMP 'Destination Unreachable' message back to the source."
    },
    {
        question:
            "You want to configure a 'route of last resort' on your router to forward all traffic for unknown destinations to your Internet Service Provider at 203.0.113.1. What is the correct syntax for this default route?",
        options: [
            "ip route 0.0.0.0 0.0.0.0 203.0.113.1",
            "ip route any any 203.0.113.1",
            "ip route default via 203.0.113.1",
            "ip route 255.255.255.255 255.255.255.255 203.0.113.1"
        ],
        answer: "ip route 0.0.0.0 0.0.0.0 203.0.113.1",
        explanation:
            "A default static route is indicated by the special 'quad-zero' address and mask, which matches any destination network."
    },
    {
        question:
            "In a two-router setup (R1 and R2), an administrator configures a static route on R1 to reach R2's LAN, but forgets to configure the return route on R2. What is the most likely outcome of a `ping` from a PC on R1's LAN to a PC on R2's LAN?",
        options: [
            "The ping will be successful.",
            "The initial ping packet will reach the destination PC, but the reply packet will be dropped by R2.",
            "The initial ping packet will be dropped by R1.",
            "Both routers will crash due to a routing loop."
        ],
        answer: "The initial ping packet will reach the destination PC, but the reply packet will be dropped by R2.",
        explanation:
            "R1 knows how to send the packet to R2's LAN. The destination PC will receive it and generate a reply. However, when the reply gets to R2, R2 has no route back to R1's LAN and will drop the reply packet."
    },
    {
        question:
            "Which of the following is a common Layer 2 WAN encapsulation protocol that provides more features than HDLC, including authentication and compression?",
        options: [
            "Ethernet",
            "PPP (Point-to-Point Protocol)",
            "IP (Internet Protocol)",
            "TCP (Transmission Control Protocol)"
        ],
        answer: "PPP (Point-to-Point Protocol)",
        explanation:
            "PPP is a versatile WAN encapsulation protocol that is an industry standard due to its flexibility and support for additional features like authentication (CHAP, PAP)."
    },
    {
        question:
            "After configuring a static route, you view the routing table with `show ip route`. What code in the output indicates a route that was manually configured?",
        options: [
            "C",
            "L",
            "S",
            "D"
        ],
        answer: "S",
        explanation:
            "The code 'S' stands for Static. 'C' is for Connected, 'L' is for Local, and 'D' is typically for EIGRP."
    },
    {
        question:
            "A router's routing table has an entry for `192.168.0.0/16` and another for `192.168.32.0/24`. If a packet arrives with a destination IP of `192.168.32.50`, which route will the router use?",
        options: [
            "The `192.168.0.0/16` route because it was learned first.",
            "The `192.168.32.0/24` route because it is a more specific match.",
            "The router will load balance between the two routes.",
            "The router will drop the packet because the destination is ambiguous."
        ],
        answer: "The `192.168.32.0/24` route because it is a more specific match.",
        explanation:
            "Routers always prefer the route with the longest prefix match. A /24 mask is longer (more specific) than a /16 mask, so it is the preferred path for any address within its range."
    },
    {
        question:
            "What is the primary function of a CSU/DSU in a traditional WAN setup?",
        options: [
            "To assign IP addresses to devices on the LAN.",
            "To act as a firewall between the router and the WAN.",
            "To encrypt all traffic leaving the router.",
            "To translate the digital signals between the router's interface and the telecom provider's line."
        ],
        answer: "To translate the digital signals between the router's interface and the telecom provider's line.",
        explanation:
            "The CSU/DSU serves as a demarcation point and digital signal translator, much like a modem does for broadband connections. It ensures the router and the telco network can understand each other."
    },
    {
        question:
            "When configuring a static route, what does the 'next-hop-address' component represent?",
        options: [
            "The IP address of the final destination PC.",
            "The IP address of the router's own exit interface.",
            "The IP address of the adjacent router's interface on the path to the destination.",
            "The IP address of the DNS server."
        ],
        answer: "The IP address of the adjacent router's interface on the path to the destination.",
        explanation:
            "The next-hop address tells the router where to forward the packet next. It's the IP address of the next router in the chain that is closer to the final destination."
    }
];

export default week2Questions;