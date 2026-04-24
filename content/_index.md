---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '8rem'

sections:
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
      view: article-grid
      columns: '1'
---
