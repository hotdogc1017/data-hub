interface MenuItem {
    value: string,
    col?: number,
    href: string,
}

interface MenuDropDown {
    value: string,
    col: number,
    items: MenuItem[],
}

// 限制最大菜单数为4个，是因为[0, 4]的每个整数区间能被12整除
// 并且能做到即便是在md尺寸下，菜单栏也不会被折叠（md尺寸是临界点，再小将被折叠）
export const menuList: (MenuItem | MenuDropDown)[] = [
    {
        value: "禅道",
        col: 2,
        href: "http://39.100.232.59:83/my/"
    },
    {
        value: "京北通宇商城",
        col: 4,
        items: [
            {
                value: "线上",
                href: "https://www.jbchip.com",
            },
            {
                value: "59",
                href: "https://dev.jbchip.com",
            },
            {
                value: "本地",
                href: "http://localhost:9008/",
            },
        ]
    },
    {
        value: "京北通宇商城后台",
        col: 5,
        items: [
            {
                value: "线上",
                href: "https://www.jbchip.com/adminui/Login?redirect=%5Bobject%20Object%5D",
            },
            {
                value: "59",
                href: "https://dev.jbchip.com/adminui/Login?redirect=%5Bobject%20Object%5D",
            },
            {
                value: "本地",
                href: "http://localhost:9008/adminui/Login",
            },
        ]
    }
]