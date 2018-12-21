# HTM Demo
- Server Side Rendered HTML + CSS (Emotion)
- [HTM](https://github.com/developit/htm) Rendering using JSX-like syntax in plain JavaScript - no transpiler necessary.
- Zero Babel config
- [ESM](https://github.com/standard-things/esm) for module loading

<hr>

[Demo Link](https://htm-demo-uamrbtnchw.now.sh)

## Use Case 1 

TLDR: I want to build sites where "some routes" are server rendered and don't hydrate (no bundle, no JS parsing). Super fast time to interactive.


Since I've started doing more work with Server-Side React (Razzle / Next.js / also from scratch) I've noticed in some cases I don't need a **hydrate step**.  

If I can avoiding loading a JS bundle and have no JS parse I should be able to speed up my time to interactive on a page.  If I can delay or prefetch the bundle this is a win as well. 

Turns out I'm not the only one thinking about this see:  [Netflix - Improving Time-To-Interactive for Netflix.com on Desktop](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9).

> Since most of the elements on the page were basic HTML, remaining elements such as JavaScript click handling and class adding could be replaced with plain JavaScript, and the page’s language switcher, originally built using React, was rebuilt in vanilla JavaScript using less than 300 lines of code.

In my case in the past I've tried rendering a homepage for a service as **static markup**.  This made the initial load time much faster but it didn't take dynamic text on the page into account i.e. showing text i.e. dates / contact information for different regions.  Doing a full static render fails for my use case.

Failing back to HTML without needing to write plain HTML feels ideal.  Simple things like looping over data is a must have for me.  I don't want to learn another templating language.  I want to use JS to map over lists etc...  I want to be able to write **Components** to break markup into small chunks that can be used when rendered with Node or a client side app i.e. this could be as simple as a button component server rendered and alsoe used within a React app. 


I plan updating this demo for this use case soon.
