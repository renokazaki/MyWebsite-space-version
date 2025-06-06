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
        { name: "Framer Motion", icon: "/icons/FramerMotion.png" },
      ],
      description: "友人と習慣の継続を促しあえるSNSです。Line Messaging APIを使用して友達が活動を始めると公式アカウントからリアルタイムでメッセージを受け取れます。",
      point:
        "バックエンドにHono.jsを採用し、Next.jsのSSRやReactのuseOptimistic、Suspenseを積極的に活用することで処理速度とユーザビリティの向上を意識しました。",
    },
    {
      name: "旅行管理アプリ",
      image: "../textures/TravelManager.PNG",
      repository: "https://github.com/renokazaki/Travel-Manager",
      link: "https://travel-manager-gamma.vercel.app/",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "Hono.js", icon: "/icons/Honojs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "Stripe", icon: "/icons/Stripe.png" },
        { name: "npm", icon: "/icons/Npm.png" },
        { name: "Framer Motion", icon: "/icons/FramerMotion.png" },
      ],
      description:
        "旅行のスケジュール調整、プラン立て、旅行後の生産まで全てを完結できるアプリです。\nマネタイズまでを視野に入れ作成しました。",
      point:
        "マネタイズまで意識しホスティングの選定や、Stripeの連携を行いました。\nハッカソンに参加し1ヶ月で作成したものです。",
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
      name: "ポートフォリオサイト",
      image: "../textures/Portfolio.PNG",
      repository: "https://github.com/renokazaki/MyWebsite-space-version",
      link: "https://my-website-space-version.vercel.app/",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "bun", icon: "/icons/Bun.png" },
        { name: "Framer Motion", icon: "/icons/FramerMotion.png" },
      ],
      description:
        "R3F（React Three Fiber）を活用した奥行きのあるポートフォリオサイトです。",
      point: "差別化を図るため勉強してきたR3Fの機能を活用してポートフォリオサイトを作成しました。",
    },
    {
      name: "海底探索ホームページ",
      image: "../textures/ExploreOcean.PNG",
      repository: "https://github.com/renokazaki/scroll-portfolio",
      link: "https://scroll-portfolio-two.vercel.app/",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ],
      description:
        "R3F（React Three Fiber）を活用した海底探索をテーマにしたインタラクティブなWebサイトです。",
      point: "ユーザーがページをスクロールするたびに、海底の景色や生物たちが自然に現れたり消えたりし、まるで実際に海中を潜っているかのような感覚を演出しています。従来の静的なWebページとは一線を画すインタラクティブなユーザーエクスペリエンスを提供しています。",
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
  ],

// 自己紹介セクションの構造
about: {
  profile: {
    title: "プロフィール",
    icon: "User",
    content: "名前：岡崎 蓮\n西暦：1999年8月21日 25歳\n",
  },
  skills: {
    title: "スキル",
    icon: "Award",
    content:
      "Next.js, React, TypeScript, Node.js, Express, Hono.js, Tailwind CSS, AWS, FireBase, Docker, GitHub Actions, Shadcn/ui, Prisma, Drizzle, Clerk, Npm, Bun, Pnpm, Three.js, R3F, GSAPなど",
  },
  achievement: {
    title: "最近の開発実績",
    icon: "Heart",
    content: `【Code Lesson プロジェクト参加中】
プログラミング学習webサイト「Code Lesson」にコントリビューターとして参加。Next.js、Express、TypeScript、Docker、AWS、GitHub Actionsを使用。
URL: https://code-lesson.com/


【AI駆動個人開発ハッカソン参加中】
マネタイズを目標としたAI駆動開発によるオリジナルプロダクト作成に挑戦中。`,
  },
  appealPoint: {
    title: "アピールポイント",
    icon: "Coffee",
    content: `【継続的な技術習得】
Next.js、React、TypeScriptを日常的に触り、新機能や最新のベストプラクティスを積極的に学習。社内Udemy活用ランキング1位を獲得。

【積極的なコミュニティ活動】
チーム開発プロジェクト「Code Lesson」への参画、ハッカソンの参加、メンターとの技術相談、技術コミュニティへの参加、勉強会への積極的参加。

【英語技術情報への対応力】
英語の技術情報に苦手意識がなく、最新の海外技術情報もスムーズにキャッチアップ可能。

【実践的な開発経験】
外部API連携、CICD、AWSを使ったホスティング、モノレポ構成など、実務で活用できる技術的取り組みを積極的に経験。`,
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
