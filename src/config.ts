export const config = {
  title: "Ren Okazaki",
  sections: ["home", "projects", "profile", "contact"],
  home: {
    title: "Ren Okazaki",
  },

  projects: [
    {
      name: "習慣応援SNS(Line Messaging API使用)",
      image: "../textures/ActiveLink.PNG",
      repository: "https://github.com/renokazaki/ActiveLink",
      link: "https://active-link-frontend.vercel.app",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "Hono.js", icon: "/icons/Honojs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "Bun", icon: "/icons/Bun.png" },
      ],
      description: "友人と習慣の継続を促しあえるSNSです。Line Messaging APIを使用して友達が活動を始めると公式アカウントからリアルタイムでメッセージを受け取れます。",
      point:
        "バックエンドにHono.jsを採用し、Next.jsのSSRやReactのuseOptimistic、Suspenseを積極的に活用することで処理速度とユーザビリティの向上を意識しました。",
    },
    {
      name: "タスク管理アプリ",
      image: "../textures/TaskManagement.png",
      repository: "https://github.com/renokazaki/Task_Management",
      link: "https://task-management-application-sable.vercel.app/",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description: "タスクをカテゴリ別に優先度や進捗を管理するアプリです。",
      point:
        "シンプルかつ直感的なインターフェースを提供し、グラフを導入することで登録されているタスクの進捗を可視化しました。普段自分が使う際に欲しい機能を考慮してタスク管理アプリを作成しました。",
    },
    {
      name: "家計簿アプリ",
      image: "../textures/MoneyDiary.PNG",
      repository: "https://github.com/renokazaki/MoneyDiary",
      link: "https://money-diary-woad.vercel.app/",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description:
        "収支を管理する家計簿アプリです。カレンダーから取引が行われた日付を表示することで日付ごとの取引履歴も確認できます。",
      point:
        "ランディングページを作成し、ユーザ体験を考慮してシンプルで直感的なインターフェースを提供しました。",
    },
    {
      name: "3Dモデル商品紹介サイト(iPhone)",
      image: "../textures/IPhoneScroll.PNG",
      repository: "https://github.com/renokazaki/first_gsap_scrollapp",
      link: "https://first-gsap-scrollapp.vercel.app",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "GSAP", icon: "/icons/GSAP.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description:
        "iPhoneの3DモデルとR3F、GSAPを使用した縦スクロールサイトです。モデルや背景を変更することで様々な用途のサイトに応用できます。",
      point: "R3Fの機能とGSAPを活用してアニメーションを実装しました。",
    },
    {
      name: "3Dモデル商品紹介サイト(コーラ)",
      image: "../textures/Coke.PNG",
      repository: "https://github.com/renokazaki/coke",
      link: "https://coke-chi.vercel.app/",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description:
        "私の大好きなコーラの3DモデルとR3Fを使用した縦スクロールサイトです。",
      point: "R3Fの機能を活用して大好きなコーラの紹介サイトを作成しました。",
    },
    {
      name: "ハンバーガー積み上げゲーム",
      image: "../textures/HamburgerStack.PNG",
      repository: "https://github.com/renokazaki/Tower-Battle",
      link: "https://tower-battle.vercel.app",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description: "ハンバーガー積み上げゲームです。",
      point:
        "Three.jsで提供されている物理法則を実装することで、よりリアルなゲーム体験ができるようにしました。",
    },
    {
      name: "作成中",
      image: "../textures/ComingSoon.PNG",
      repository: "https://github.com/renokazaki/Tower-Battle",
      link: "https://tower-battle.vercel.app",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "Hono.js", icon: "/icons/Honojs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "Bun", icon: "/icons/Bun.png" },
      ],
      description:
        "動画共有SNSです。Youtubeから提供されているAPIを使用することで動画の詳細を取得して表示しています。",
      point:
        "YoutubeのAPIを使用する。処理速度の速さにこだわる",
    },
  ],

  // 自己紹介セクションの構造
  about: {
    profile: {
      title: "プロフィール",
      icon: "User",
      content: "名前：岡崎 蓮\n西暦：1999年8月21日 25歳\n",
    },
    education: {
      title: "学歴・職歴",
      icon: "GraduationCap",
      content:
        "2023年 駒澤大学 卒業\n2023-現在 株式会社ウィズ・ワン エンジニア",
    },
    skills: {
      title: "保有資格",
      icon: "Award",
      content:
        "・TOEIC スコア830点\n・基本情報技術者試験\n・ServiceNow CSA\n・ServiceNow CAD\n・ServiceNow ITSM\n・秘書技能検定準1級",
    },
    personality: {
      title: "性格",
      icon: "Heart",
      content: "・前向き\n・向上心",
    },
    hobbies: {
      title: "趣味",
      icon: "Coffee",
      content: "・運動\n・映画鑑賞\n・旅行\n",
    },
  },

  contact: {
    name: "Ren Okazaki",
    address: "Tokyo, Japan",
    socials: {
      github: "https://github.com/renokazaki",
      zenn: "https://zenn.dev/ren21",
    },
    mail: "ren84690@gmail.com",
  },
};
