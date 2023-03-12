interface Tools {
    icon: string,
    alt: string
}

export interface Project {
    id: string;
    title: string;
    descriptionShort: string;
    descriptionLong: string;
    siteLink: string;
    siteCode: string | null;
    mobileImg: string | null;
    desktopImg: string;
    desktopVideo: string | null;
    desktopExtraImgs: string[];
    iconTools: Tools[];
}