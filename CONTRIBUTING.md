Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── .husky                   # Generate from command `npm run prepare`
    ├── nginx                    # Nginx config with docker
    ├── node_modules             # All library use in this project 
    ├── public                   # Media folder
        ├── icons                # Folder have all svg icon
        ├── images               # Folder have all *png,*jpg images
        ├── localels             # Multiple language
        ├── index.html           
    ├── src
        ├── @core                # Folder have common component, config...
            ├── component        # Folder have all common component prefix name is ngx
                ├── ngx-navigator
            ├── config           # Configs of application
            ├── data             # Fake data folder
            ├── enums            # Folder define all enum use in application
            ├── helpers          # Folder have all file helper use in application
            ├── models           # Folder have all file model use in application
            ├── services         # Folder have all file service
            ├── utils            # Folder have all utility 
        ├── @pages
            ├── dashboard
                ├── dashboard.component.tsx    # File have html, JSX template. This file don't have any logic of component
                ├── dashboard.hook.ts          # File have all logic, hook of component
                ├── dashboard.style.scss       # File have style of component
                ├── dashboard.recoil.ts        # File define state use recoil
                ├── dashboard.query.ts         # File define mutation, useQuery of React-Query
        ├── @theme
            ├── component        # Folder have all component use in theme of application
            ├── layout           # Folder define layout ex: primary, auth
            ├── styles           # Folder have common scss file
        ├── index.tsx
        ├── react-app-env.d.ts
        ├── setupTests.ts
    ├── .dockerignore            # Config docker ignore file
    ├── .env                     # Config envinronment
    ├── .env.development         # Config development envinronment
    ├── .env.production          # Config production envinronment
    ├── .eslintignore            # Config eslint ignore
    ├── .eslintrc.json           # Config eslint rule
    ├── .gitignore    
    ├── .prettierrc.json         # Config format code of prettier
    ├── .travis.yml        
    ├── CHANGELOG.md             
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md          # Folder structure, coding convention
    ├── docker-compose.yml       # File docker compose config use for Jenkins job
    ├── Dockerfile               # Docker file config use for Jenkins job
    ├── Dockerfile.dev           # Docker file config use for Jenkins job with dev env
    ├── Jenkinsfile              # The file have script of Jenkins multiple branch pipeline
    ├── LICENSE
    ├── package.json
    ├── tsconfig.json 
    └── README.md

- Name folder convention use lowercase example: dashboard, login, protected-route
- Name common component start with ngx prefix example: ngx-table
- Name component, screen example: dashboard.component.tsx. 

# TypeScript coding


## Table of contents

* [Typescript coding style guide](#typescript-coding-style-guide)
    * [Naming](#naming)
    * [Naming Conventions](#naming-conventions)
    * [Naming Booleans](#naming-booleans)
    * [Brackets](#brackets)
    * [Spaces](#spaces)
    * [Semicolons](#semicolons)
    * [Code Comments](#code-comments)
    * [Barrels](#barrels)
## Typescript coding style guide

### Naming

The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.

**Use meaningful variable names.**

Distinguish names in such a way that the reader knows what the differences offer.

Bad:

 ``` typescript
 function isBetween(a1: number, a2: number, a3: number): boolean {
   return a2 <= a1 && a1 <= a3
 }
```

Good:

``` typescript
 function isBetween(value: number, left: number, right: number): boolean {
   return left <= value && value <= right
 }
```

**Use pronounceable variable names**

If you can't pronounce it, you can't discuss it without sounding weird.

Bad:

``` typescript
class Subs {
  public ccId: number
  public billingAddrId: number
  public shippingAddrId: number
}
```

Good:

``` typescript
class Subscription {
  public creditCardId: number
  public billingAddressId: number
  public shippingAddressId: number
}
```

**Avoid mental mapping**

Explicit is better than implicit.<br />
*Clarity is king.*

Bad:

``` typescript
const u = getUser()
const s = getSubscription()
const t = charge(u, s)
```

Good:

``` typescript
const user = getUser()
const subscription = getSubscription()
const transaction = charge(user, subscription)
```

**Don't add unneeded context**

If your class/type/object name tells you something, don't repeat that in your variable name.

Bad:

``` typescript
type Car = {
  carMake: string
  carModel: string
  carColor: string
}

function print(car: Car): void {
  console.log(`${car.carMake} ${car.carModel} (${car.carColor})`)
}
```

Good:

``` typescript
type Car = {
  make: string
  model: string
  color: string
}

function print(car: Car): void {
  console.log(`${car.make} ${car.model} (${car.color})`)
}
```

### Naming Conventions

* Use camelCase for variable and function names

Bad:

``` typescript
var FooVar
function BarFunc() { }
```

Good:

``` typescript
var fooVar
function barFunc() { }
```

* Use camelCase of class members, interface members, methods and methods parameters

Bad:

``` typescript
class Foo {
  Bar: number
  Baz() { }
}
```

Good:

``` typescript
class Foo {
  bar: number
  baz() { }
}
```

* Use PascalCase for class names and interface names.

Bad:

``` typescript
class foo { }
```

Good:

``` typescript
class Foo { }
```

* Use PascalCase for enums and camelCase for enum members

Bad:

``` typescript
enum notificationTypes {
  Default = 0,
  Info = 1,
  Success = 2,
  Error = 3,
  Warning = 4
}
```

Good:

``` typescript
enum NotificationTypes {
  default = 0,
  info = 1,
  success = 2,
  error = 3,
  warning = 4
}
```

### Naming Booleans

* Don't use negative names for boolean variables.

Bad:

``` typescript
const isNotEnabled = true
```

Good:

``` typescript
const isEnabled = false
```

* A prefix like is, are, or has helps every developer to distinguish a boolean from another variable by just looking at it

Bad:

``` typescript
const enabled = false
```

Good:

``` typescript
const isEnabled = false
```

### Brackets

* **OTBS** (one true brace style). [Wikipedia](https://en.wikipedia.org/wiki/Indentation_style#Variant:_1TBS_(OTBS))

The one true brace style is one of the most common brace styles in TypeScript, in which the opening brace of a block is placed on the same line as its corresponding statement or declaration.

``` typescript
if (foo) {
  bar()
}
else {
  baz()
}
```

* Do not omit curly brackets

* **Always** wrap the body of the statement in curly brackets.

### Spaces

Use 2 spaces. Not tabs.

### Semicolons

Use semicolons.

### Code Comments

> So when you find yourself in a position where you need to write a comment, think it through  and  see  whether  there  isn't  some  way  to  turn  the  tables  and  express  yourself  in code. Every time you express yourself in code, you should pat yourself on the back. Everytime you  write  a  comment,  you  should  grimace  and  feel  the  failure  of  your  ability of expression.

**Bad Comments**

Most comments fall into this category. Usually they are crutches or excuses for poor code or justifications for insufficient  decisions, amounting to little more than the programmer talking to himself.

**Mumbling**

Plopping in a comment just because you feel you should or because the process requires it, is a hack. If you decide to write a comment, then spend the time necessary to make sure it is the best comment you can write.

**Noise Comments**

Sometimes you see comments that are nothing but noise. They restate the obvious and provide no new information.

``` typescript
// redirect to the Contact Details screen
this.router.navigateByUrl(`/${ROOT}/contact`)
```

``` typescript
// self explanatory, parse ...
this.parseProducts(products)
```

**Scary noise**

``` typescript
/** The name. */
private name;

/** The version. */
private version;

/** The licenceName. */
private licenceName;

/** The version. */
private info;
```

Read these comments again more carefully. Do you see the cut-paste error? If authors aren't  paying attention when comments are  written (or pasted), why should  readers be expected to profit from them?

**TODO Comments**

In general, TODO comments are a big risk. We may see something that we want to do later so we drop a quick **// TODO: Replace this method** thinking we'll come back to it but never do.

If you're going to write a TODO comment, you should link to your external issue tracker.

There are valid use cases for a TODO comment. Perhaps you're working on a big feature and you want to make a pull request that only fixes part of it. You also want to call out some refactoring that still needs to be done, but that you'll fix in another PR.

``` typescript
// TODO: Consolidate both of these classes. PURCHASE-123
```

This is actionable because it forces us to go to our issue tracker and create a ticket. That is less likely to get lost than a code comment that will potentially never be seen again.

**Comments can sometimes be useful**

* When explaining why something is being implemented in a particular way.
* When explaining complex algorithms (when all other methods for simplifying the algorithm have been tried and come up short).

**Comment conventions**

* Write comments in *English*.

* Do not add empty comments

* Begin single-line comments with a single space

Good:

``` typescript
// Single-line comment
```

Bad:

``` typescript
//Single-line comment
//  Single-line comment
```

* Write single-line comments properly

    * Single-line comments should always be preceded by a single blank line.
    * Single-line comments should never be followed by blank line(s).

Good:

``` typescript
const x

// This comment is valid
const y
```

Bad:

``` typescript
const x

// This comment is not valid

const y
```
``` typescript
const x
// This comment is not valid

const y
```

* Do not write embedded comments

    * Do not write comments between declaration of statement and opening curly brackets.
    * Place comments above statements, or within statement body.

Good:

``` typescript
// This method does something..
public method() {
}
```

Bad:

``` typescript
public method() { // This method does something..
}
```

``` typescript
public method() {
// This method does something..
}
```

### Barrels

> A barrel is a way to rollup exports from several modules into a single convenience module. The barrel itself is a module file that re-exports selected exports of other modules.

> **import noise** - this is an issue seen in languages where there are dependencies that need to be "imported", "required", or "included" and the first (1 - n) lines are non functional code.

Example of a barrel file:

``` typescript
export * from './product-added-dialog.component'
export * from './website-selector.component'
export * from './product-family-selector.component'
export * from './individual-product-selector.component'
export * from './license-type-selector.component'
export * from './period-and-quantity-selector.component'
```

How to use it inside components:

Good:

``` typescript
import { CartsService, PaidSupportService, SettingsService } from '@modules/services'
```

Bad:

``` typescript
import { SettingsService } from './settings/settings.service'
import { CartsService } from './carts/carts.service'
import { PaidSupportService } from './paid-support/paid-support.service'
```

* Barrel files are named index.ts by convention
* Do not import a barrel in the files that are already used in that barrel because this leads to circular dependency
