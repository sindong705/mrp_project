import { CiHome } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { CiLollipop } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

export const headerMenus = [
    {
        title: "메인페이지",
        icon: <CiHome />,
        src: "/"
    },
    {
        title: "추천 PlayList",
        icon: <CiMusicNote1 />,
        src: "/today"
    },
    {
        title: "PlayList 채널",
        icon: <CiBoxList />,
        src: "/developer"
    },
    {
        title: "Top-50",
        icon: <CiTrophy />,
        src: "/top50"
    },
    {
        title: "K-pop",
        icon: <CiLollipop />,
        src: "/kpop"
    },
    {
        title: "Hip-hop",
        icon: <CiBadgeDollar />,
        src: "/hiphop"
    },
];

export const searchKeyword = [
    {
        title: "알앤비",
        src: "/search/알앤비"
    },
    {
        title: "재즈",
        src: "/search/재즈"
    },
    {
        title: "트로트 ",
        src: "/search/트로트"
    },
    {
        title: "힙합",
        src: "/search/힙합"
    },
    {
        title: "발라드",
        src: "/search/발라드"
    },
    {
        title: "댄스",
        src: "/search/댄스"
    },
    {
        title: "클래식",
        src: "/search/클래식"
    },
    {
        title: "POP",
        src: "/search/POP"
    },
    {
        title: "EDM",
        src: "/search/EDM"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/sindong705",
        icon: <AiFillGithub />
    },
]
