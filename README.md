<h1>VUE STARTER PACK CLI</h1>
<p align="center">
   <img  src="https://img.shields.io/badge/license-MIT-green">
 <img  src="https://img.shields.io/badge/build-passing-brightgreen">
   <img  src="https://img.shields.io/badge/version-1.0.0-orange">
   <img  src="https://img.shields.io/badge/npm-v6.14.8-blue">
  <img  src="https://img.shields.io/badge/node-v12.18.2-yellow">
 </p>
 <br>
<p align="center">A CLI to create a project based on Vue starter pack in the terminal.</p>
<br>

<p align="center">
<img src="images/demo.gif" alt="demonstration" height="500" width="800" >  
</p>

---

## Usage

```
~$ vsp --help
Usage: vsp <parameter> to start using vue starter pack

Options:
        --version             Show version number.              [boolean]
    -r, --repository          Get a repository  .               [boolean]
        --help                Show help.                        [boolean]
    -s, --start               Start a new project base in vlc   [boolean]

```

> :warning: **to start a project you must define the project name**

<br>

## Installation

1. Clone the repository and then navigate to it.
2. Run `npm install` to install the dependencies.
3. Run `npm install -g .` to install the CLI. <br>

> :warning: **This might cause an error** which can be resolved easily by using `sudo` with the command, **however**, using `sudo` with `npm` is **not recommended** because it might cause permission issues later. So instead put the code below in your .bashrc file and then run the above command again.

```
npm set prefix ~/.npm
PATH="$HOME/.npm/bin:$PATH"
PATH="./node_modules/.bin:$PATH"
```

4. Now you are good to go and can use the CLI globally!

Type `vsp` or `vsp --help` to get started.

<br>

## License

MIT
