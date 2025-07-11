import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  lang: 'zh-CN',
  title: "X_Star Wiki",
  description: "X_Star Network 官方维基百科",
  head: [
    ['link', { rel: 'icon', href: 'https://www.helloimg.com/i/2025/02/04/67a1b57ed66de.png' }]
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://wiki.tbedu.top'
  },
  themeConfig: {
    // Theme related configurations.
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回页首",
    langMenuLabel: "切换语言",
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    logo: 'https://www.helloimg.com/i/2025/02/04/67a1b57ed66de.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '服务器', link: '/server/introduction/' },
      { text: '服务', link: '/service/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TBedu/wiki' }
    ],
    footer: {
      message: '根据 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 发布。',
      copyright: '版权所有 © 2024-2025 <a href="https://www.tbedu.top" target="_blank">FeltSquirrel727</a>'
    },
    editLink: {
      pattern: 'https://github.com/TBedu/wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: [2, 6],
      label: "页面导航"
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '确认',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: '退出'
                }
              }
            }
          }
        }
      }
    }
  }
};

export default defineConfig(
  withSidebar(vitePressOptions, [
    {
      documentRootPath: '/',
      scanStartPath: 'server',
      basePath: '/server/',
      resolvePath: '/server/',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true
    },
    {
      documentRootPath: '/',
      scanStartPath: 'service',
      resolvePath: '/service/',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true
    }
  ])
);