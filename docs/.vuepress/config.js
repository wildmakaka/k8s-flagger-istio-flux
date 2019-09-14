module.exports = {
  title: "Kubernetes + Flagger + Flux + Istio + Harbor",
  description: "Kubernetes + Flagger + Flux + Istio + Harbor",
  base: '/k8s-flagger-istio-flux/',
  head: [
    ['link', { rel: "icon", href: "https://kubernetes.io/images/favicon.png" }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: true,
    repo: 'ruzickap/k8s-flagger-istio-flux',
    docsDir: 'docs',
    editLinks: true,
    logo: 'https://kubernetes.io/images/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Links',
        items: [
          { text: 'Flux', link: 'https://fluxcd.io' },
          { text: 'Flagger', link: 'https://flagger.app' },
          { text: 'Harbor', link: 'https://goharbor.io' },
        ]
      }
    ],
    sidebar: [
      '/',
      '/part-01/',
      '/part-02/',
      '/part-03/',
      '/part-04/',
    ]
  },
  plugins: [
    ['@vuepress/medium-zoom'],
    ['@vuepress/back-to-top'],
    ['reading-progress'],
    ['smooth-scroll'],
    ['seo']
  ]
}