import{a as s,t as n}from"../chunks/disclose-version.vS8Cq8Jh.js";import{l as r,s as l}from"../chunks/props.D2REnYk1.js";import{M as d}from"../chunks/mdsvex-blog.JwM54Ahg.js";var h=n(`<h2 id="the-early-days"><a aria-hidden="true" tabindex="-1" href="#the-early-days"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The early days</h2> <p>It was about 15 years ago when I first started getting into web development and from the beginning, CSS was my favorite part. I loved the ability to style the same content in different ways. I was amazed by the power of CSS and how it could change the whole look and feel of a website with a few lines of code.</p> <p>Back then there was no build tool and no CSS processing. People where writing inline CSS for small projects and if it was a lot of styles they would use a vanilla <code>.css</code> file.</p> <p>I was also using vanilla CSS. Starting from the top of the page, adding class names to elements and then writing the styles for those classes. It was a lot of fun and I was enjoying it. However as the projects got bigger and bigger, it used to go out of control and hard to maintain. At that time, No one was talking about CSS architecture and how to write maintainable CSS. So I was just doing my best to keep it clean and organized.</p> <h2 id="experimenting-css-libraries"><a aria-hidden="true" tabindex="-1" href="#experimenting-css-libraries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>experimenting CSS libraries</h2> <p>As CSS evolved and people started to use it more and more, they realized that there are some common patterns that they use over and over again. So they started to create methods and libraries to make it easier to maintain CSS.</p> <p>Early CSS libraries started to show up.
Blueprint, 960.gs, YUI, Bootstrap, Foundation, etc.</p> <ul><li>Libraries like <a href="http://www.blueprintcss.org/" rel="nofollow" target="_blank">Blueprint</a> were providing default styles for HTML tags and also a few class names to set colors or positions for the elements. Nowadays we call them utility classes.</li> <li>Libraries like <a href="https://960.gs/" rel="nofollow" target="_blank">960.gs</a> were only providing a grid system to make it easier to create layouts.</li> <li>Libraries like <a href="https://getbootstrap.com/" rel="nofollow" target="_blank">Bootstrap</a> or <a href="https://yuilibrary.com/" rel="nofollow" target="_blank">YUI</a> were providing a set of components like buttons, tabs, etc.</li></ul> <p>These libraries got very popular and people started to use them more and more. However, I had a hard time customizing them. I was not able to change the look and feel of the components without overriding a lot of styles. I used each of them for a few projects but I was always looking for a better solution for my next project.</p> <h2 id="trying-to-fix-the-problem-with-css-design-methodologies"><a aria-hidden="true" tabindex="-1" href="#trying-to-fix-the-problem-with-css-design-methodologies"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Trying to fix the problem with CSS design methodologies</h2> <p>I couldn’t find a CSS library that I could use for all my projects because I wanted a new design for each project. So instead of relying on a CSS library, I was writing vanilla CSS for each project but every time I was trying to make it more maintainable and easier to customize.</p> <p>There were CSS writing methodologies like OOCSS, ACSS, SMACSS and BEM to solve this problem but I was always finding myself jumping from one methodology to another or mixing them together. Some strict rules of these methodologies were not working for me and I was always trying to find a better way to write CSS.</p> <h2 id="perfecting-the-style-with-css-preprocessors"><a aria-hidden="true" tabindex="-1" href="#perfecting-the-style-with-css-preprocessors"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Perfecting the style with CSS preprocessors</h2> <p><a href="http://lesscss.org/" rel="nofollow" target="_blank">Less</a> and <a href="https://sass-lang.com/" rel="nofollow" target="_blank">Sass</a> were the first CSS preprocessors that I used. With them finally I was able to overengineer my CSS in order to make it more maintainable. I tried many structures to organize my CSS but at the end when projects got bigger, it was always hard to maintain.</p> <p>I was basically copy/pasting my Sass files from one project to another and then overriding them to change the colors and design details. I had some failed attempts to create a single Sass architecture that I could use for all my projects where each project could have its own design. But I was never able to make it work. It was too complicated to organize a multi-purpose CSS architecture to cover all my needs across all my projects.</p> <h2 id="back-to-bootstrap-prison"><a aria-hidden="true" tabindex="-1" href="#back-to-bootstrap-prison"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Back to Bootstrap prison</h2> <p>Then I tried to build a customizable theme on top of Bootstrap where I could change the design details without overriding a lot of styles. That project didn’t go well either. It is so hard to time consuming to fight bootstrap’s default styles and make it look the way you want.</p> <h2 id="tailwind-to-the-rescue"><a aria-hidden="true" tabindex="-1" href="#tailwind-to-the-rescue"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Tailwind to the rescue</h2> <p>Tailwind CSS got my attention when I saw it for the first time. It was a CSS framework that was not providing any default styles. It was only providing utility classes to make it easier to style your website. It was a great idea to make things easier to customize. I started using it on a few projects and I was happy with it.</p> <p>The idea of having utility classes for every CSS rule was great. Finally I had a fully customizable CSS framework that I could use for all my projects. I was able to use the same HTML for multiple projects and then change a few colors and design details to make it look different.</p> <h2 id="but-utility-only-was-slow-and-bloated"><a aria-hidden="true" tabindex="-1" href="#but-utility-only-was-slow-and-bloated"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But utility-only was slow and bloated</h2> <p>However like everyone else, I was not happy with the amount of class names I had to use for every element on every page and on every project. At one point I was having my ideal class names for each component (Button, input, card, etc) and I was copying the exact same class names to every project. It was a lot of work and I was not happy with it.</p> <h2 id="utility-first-not-utility-only"><a aria-hidden="true" tabindex="-1" href="#utility-first-not-utility-only"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Utility-first, not utility-only</h2> <p>I needed a faster and easier way. All I needed to customize for a button was color, border-radius and size. I didn’t want to write all the class names for the button every time. I wanted to simply have a <code>.btn</code> class as easy as Bootstrap but with the ability to customize it.</p> <p>I started to make a CSS file and put all my default styles in <code>@apply</code> directives. This way I could simply use a <code>btn</code> class and then customize it using <code>bg-*</code> utility class. It was a lot better. My Code became cleaner and I was able to develop my projects faster!</p> <p>Now I had the power of customization using Tailwind CSS utility classes and the ease of use of Bootstrap. I was happy with it and I was using it for all my projects.</p> <h2 id="birth-of-daisyui"><a aria-hidden="true" tabindex="-1" href="#birth-of-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Birth of daisyUI</h2> <p>I was using my <code>@apply</code> collection on all my projects and it was working great. I decided to publish it as a library so other people could use it too. I had to find a name for it. I was looking for a short name that could represent the idea of growth and prettiness. Finally I went with 🌼 daisyUI. It’s short, easy to remember and the name was available on NPM.</p> <p>I started to work on it as a side project. I used Tailwind CSS’ plugin API to make it as easy as possible to use. For version 0.x I started with a few components and then I added more and more components to it. Finally it was ready to be used on real projects. With version 1.0, I got a lot of feedback from the community and I was able to improve it with every release. Every time I was adding a new component, I was trying to make it as customizable as possible. I was trying to make it easy to use and easy to customize.</p> <p>I extended the Tailwind CSS color names to make all daisyUI components themeable by default. I wanted to make it as easy as possible to change the colors of the components because for me, personally it was important that websites made with daisyUI look different from each other. This was possible thanks to Tailwind CSS API and I was able to make it work. Now, daisyUI not only provides a set of components but also provides themes that apply colors to all components.</p> <h2 id="if-it-can-be-styled-with-css-only-it-should-be-styled-with-css-only"><a aria-hidden="true" tabindex="-1" href="#if-it-can-be-styled-with-css-only-it-should-be-styled-with-css-only"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>If it can be styled with CSS only, it should be styled with CSS only</h2> <p>It’s important for me that daisyUI as a CSS component library doesn’t depend on any JavaScript library. I provided styles for the components that could be interactive using CSS-only but things like datepickers, etc. are not part of daisyUI. I wanted to keep it as simple as possible and let people use their favorite JavaScript libraries for the interactive components. Gladly there are a lot of headless JavaScript libraries out there and most of them are compatible with daisyUI. You can simply use daisyUI class names or color CSS variables to style them.</p> <h2 id="best-of-both-worlds"><a aria-hidden="true" tabindex="-1" href="#best-of-both-worlds"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Best of both worlds</h2> <p>I’m happy with daisyUI and I’m using it for all my projects. It allows me to create a new design for each project and it makes it easy to customize the look and feel of the components.</p> <p>I see daisyUI as the best of both worlds. Component classes for speed and utility classes for customization.</p> <p>Now I have the customization power of Tailwind CSS and the development speed of Bootstrap. I have never been able to do this with any other CSS library. I’m glad that I was able to find a solution that works for me and I’m happy to share it with the community.</p> <h2 id="thank-you"><a aria-hidden="true" tabindex="-1" href="#thank-you"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Thank you!</h2> <p>I want to thank everyone who has used daisyUI and provided feedback. I’m glad that I was able to help you with your projects. I’m also thankful to everyone who has contributed to daisyUI and everyone who donated to support the project.</p> <p>There are currently 130 contributors on <a href="https://github.com/saadeghi/daisyui" rel="nofollow" target="_blank">GitHub</a> and 60 financial supporters on <a href="https://opencollective.com/daisyui" rel="nofollow" target="_blank">Open Collective</a>. daisyUI wouldn’t be possible without your support. Thank you all! 💚</p>`,1);const p={title:"My Journey to build daisyUI: Why Tailwind CSS was not enough?",desc:"In search of the most efficient way to style a website there's a lot to explore. In this post I'll share my journey to build daisyUI, a component library on top of Tailwind CSS.",published:!0,date:"2023-10-4",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/my-journey-to-build-daisyui.webp",tags:["daisyUI","Component Library","Tailwind CSS"]};function u(e,t){const a=r(t,["children","$$slots","$$events","$$legacy"]);d(e,l(()=>a,p,{children:(o,c)=>{var i=h();s(o,i)},$$slots:{default:!0},$$legacy:!0}))}export{u as component};
