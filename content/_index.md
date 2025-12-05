---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '8rem'

sections:
  - block: markdown
    content:
      text: |
        <style>
        html {
          background: url('/media/background.jpg') no-repeat center center fixed !important;
          background-size: cover !important;
          min-height: 100vh !important;
        }
        body {
          background: transparent !important;
        }
        body > *, #page-wrapper, .page-wrapper, body > div, main, article, section, .home-section, .wg-blank, .wg-markdown, [class*="hb-block-"], div[class*="block-"], .article-container, .universal-wrapper, .page-body, #main {
          background: transparent !important;
          background-color: transparent !important;
        }
        html.dark {
          background: url('/media/background.jpg') no-repeat center center fixed !important;
          background-size: cover !important;
        }
        body.dark { background: transparent !important; }
        </style>
    design:
      columns: '1'
      css_class: 'd-none'
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      headings:
        about: 'About Me'
        education: ''
        interests: ''
    design:
      avatar:
        size: large
        shape: circle
  - block: markdown
    content:
      title: 'My Research'
      subtitle: ''
      text: |-
        Feel free to reach out for collaboration opportunities!
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Papers
      subtitle: ''
      text: ''
      filters:
        folders:
          - papers
        exclude_featured: false
    design:
      columns: '1'
---
