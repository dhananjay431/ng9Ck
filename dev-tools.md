# Developer Guidelines 
###### powered by Dhananjay 

## Angular CLI
```bash
ng generate component my-new-component
ng g component my-new-component # using the alias 
 
# components support relative path generation 
# if in the directory src/app/feature/ and you run 
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp 
# but if you were to run 
ng g component ./newer-cmp
# your component will be generated in src/app/newer-cmp 
# if in the directory src/app you can also run 
ng g component feature/new-cmp
# and your component will be generated in src/app/feature/new-cmp 
```
> ## Angular cli commands

|Scaffold|	Usage |
|--------|	-------- |
| Component	| ng g component my-new-component |
| Directive	| ng g directive my-new-directive |
| Pipe	| ng g pipe my-new-pipe |
| Service	| ng g service my-new-service |
| Class	| ng g class my-new-class |
| Guard	| ng g guard my-new-guard |
| Interface	| ng g interface my-new-interface |
| Enum	| ng g enum my-new-enum |
| Module	| ng g module my-module |

> ## Create a feature module with routing [live Example](https://stackblitz.com/angular/eydbdkevjmb?file=src%2Fapp%2Fapp-routing.module.ts) 

[Learn Angular Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)

Next, you’ll need a feature module with a component to route to. To make one, enter the following command in the terminal, where customers is the name of the feature module. The path for loading the customers feature modules is also customers because it is specified with the --route option:

```bash
ng g m customers --routing --module app.module
ng g c customers --flat --module customers.module

```
## angular components [Angular Bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started)
- [Accordion](https://valor-software.com/ngx-bootstrap/#accordion) :-  Angular Component Accordion
- [Alerts](https://valor-software.com/ngx-bootstrap/#alerts) :-  Angular Component Alerts
- [Buttons](https://valor-software.com/ngx-bootstrap/#buttons) :-  Angular Component Buttons
- [Carousel](https://valor-software.com/ngx-bootstrap/#carousel) :-  Angular Component Carousel
- [Collapse](https://valor-software.com/ngx-bootstrap/#collapse) :-  Angular Component Collapse
- [Datepicker](https://valor-software.com/ngx-bootstrap/#datepicker) :-  Angular Component Datepicker
- [Dropdowns](https://valor-software.com/ngx-bootstrap/#dropdowns) :-  Angular Component Dropdowns
- [Modals](https://valor-software.com/ngx-bootstrap/#modals) :-  Angular Component Modals
- [Pagination](https://valor-software.com/ngx-bootstrap/#pagination) :-  Angular Component Pagination
- [Popover](https://valor-software.com/ngx-bootstrap/#popover) :-  Angular Component Popover
- [Progressbar](https://valor-software.com/ngx-bootstrap/#progressbar) :-  Angular Component Progressbar
- [Rating](https://valor-software.com/ngx-bootstrap/#rating) :-  Angular Component Rating
- [Sortable](https://valor-software.com/ngx-bootstrap/#sortable) :-  Angular Component Sortable
- [Tabs](https://valor-software.com/ngx-bootstrap/#tabs) :-  Angular Component Tabs
- [Timepicker](https://valor-software.com/ngx-bootstrap/#timepicker) :-  Angular Component Timepicker
- [Tooltip](https://valor-software.com/ngx-bootstrap/#tooltip) :-  Angular Component Tooltip
- [Typeahead](https://valor-software.com/ngx-bootstrap/#typeahead) :-  Angular Component Typeahead
## Bootstrap
- [introduction](https://getbootstrap.com/docs/4.5/getting-started/introduction)
- [introduction](https://getbootstrap.com/docs/4.5/getting-started/introduction)
- [download](https://getbootstrap.com/docs/4.5/getting-started/download)
- [contents](https://getbootstrap.com/docs/4.5/getting-started/contents)
- [devices](https://getbootstrap.com/docs/4.5/getting-started/browsers-devices)
- [javascript](https://getbootstrap.com/docs/4.5/getting-started/javascript)
- [theming](https://getbootstrap.com/docs/4.5/getting-started/theming)
- [tools](https://getbootstrap.com/docs/4.5/getting-started/build-tools)
- [accessibility](https://getbootstrap.com/docs/4.5/getting-started/accessibility)
- [overview](https://getbootstrap.com/docs/4.5/layout/overview)
## Bootstrap layout
- [overview](https://getbootstrap.com/docs/4.5/layout/overview)
- [grid](https://getbootstrap.com/docs/4.5/layout/grid)
- [layout](https://getbootstrap.com/docs/4.5/layout/utilities-for-layout)
## Bootstrap content
- [reboot](https://getbootstrap.com/docs/4.5/content/reboot)
- [typography](https://getbootstrap.com/docs/4.5/content/typography)
- [code](https://getbootstrap.com/docs/4.5/content/code)
- [images](https://getbootstrap.com/docs/4.5/content/images)
- [tables](https://getbootstrap.com/docs/4.5/content/tables)
- [figures](https://getbootstrap.com/docs/4.5/content/figures)
## Bootstrap components
- [alerts](https://getbootstrap.com/docs/4.5/components/alerts)
- [badge](https://getbootstrap.com/docs/4.5/components/badge)
- [breadcrumb](https://getbootstrap.com/docs/4.5/components/breadcrumb)
- [buttons](https://getbootstrap.com/docs/4.5/components/buttons)
- [group](https://getbootstrap.com/docs/4.5/components/button-group)
- [card](https://getbootstrap.com/docs/4.5/components/card)
- [carousel](https://getbootstrap.com/docs/4.5/components/carousel)
- [collapse](https://getbootstrap.com/docs/4.5/components/collapse)
- [dropdowns](https://getbootstrap.com/docs/4.5/components/dropdowns)
- [forms](https://getbootstrap.com/docs/4.5/components/forms)
- [group](https://getbootstrap.com/docs/4.5/components/input-group)
- [jumbotron](https://getbootstrap.com/docs/4.5/components/jumbotron)
- [group](https://getbootstrap.com/docs/4.5/components/list-group)
- [object](https://getbootstrap.com/docs/4.5/components/media-object)
- [modal](https://getbootstrap.com/docs/4.5/components/modal)
- [navs](https://getbootstrap.com/docs/4.5/components/navs)
- [navbar](https://getbootstrap.com/docs/4.5/components/navbar)
- [pagination](https://getbootstrap.com/docs/4.5/components/pagination)
- [popovers](https://getbootstrap.com/docs/4.5/components/popovers)
- [progress](https://getbootstrap.com/docs/4.5/components/progress)
- [scrollspy](https://getbootstrap.com/docs/4.5/components/scrollspy)
- [spinners](https://getbootstrap.com/docs/4.5/components/spinners)
- [toasts](https://getbootstrap.com/docs/4.5/components/toasts)
- [tooltips](https://getbootstrap.com/docs/4.5/components/tooltips)
## Bootstrap utilities
- [borders](https://getbootstrap.com/docs/4.5/utilities/borders)
- [clearfix](https://getbootstrap.com/docs/4.5/utilities/clearfix)
- [icon](https://getbootstrap.com/docs/4.5/utilities/close-icon)
- [colors](https://getbootstrap.com/docs/4.5/utilities/colors)
- [display](https://getbootstrap.com/docs/4.5/utilities/display)
- [embed](https://getbootstrap.com/docs/4.5/utilities/embed)
- [flex](https://getbootstrap.com/docs/4.5/utilities/flex)
- [float](https://getbootstrap.com/docs/4.5/utilities/float)
- [replacement](https://getbootstrap.com/docs/4.5/utilities/image-replacement)
- [interactions](https://getbootstrap.com/docs/4.5/utilities/interactions)
- [overflow](https://getbootstrap.com/docs/4.5/utilities/overflow)
- [position](https://getbootstrap.com/docs/4.5/utilities/position)
- [readers](https://getbootstrap.com/docs/4.5/utilities/screen-readers)
- [shadows](https://getbootstrap.com/docs/4.5/utilities/shadows)
- [sizing](https://getbootstrap.com/docs/4.5/utilities/sizing)
- [spacing](https://getbootstrap.com/docs/4.5/utilities/spacing)
- [link](https://getbootstrap.com/docs/4.5/utilities/stretched-link)
- [text](https://getbootstrap.com/docs/4.5/utilities/text)
- [align](https://getbootstrap.com/docs/4.5/utilities/vertical-align)
- [visibility](https://getbootstrap.com/docs/4.5/utilities/visibility)
## Bootstrap extend
- [approach](https://getbootstrap.com/docs/4.5/extend/approach)
- [icons](https://getbootstrap.com/docs/4.5/extend/icons)
- [migration](https://getbootstrap.com/docs/4.5/migration)
- [overview](https://getbootstrap.com/docs/4.5/about/overview)
- [overview](https://getbootstrap.com/docs/4.5/about/overview)
- [team](https://getbootstrap.com/docs/4.5/about/team)
- [brand](https://getbootstrap.com/docs/4.5/about/brand)
- [license](https://getbootstrap.com/docs/4.5/about/license)
- [translations](https://getbootstrap.com/docs/4.5/about/translations)
