# Ansible PlayBook : Bootstrap CSS

Installs all required to customize Bootstrap with SASS : Node.js, bootstrap, dependencies, gulp, gulp-sass, ... Creates two folders scss and dist and adds a custom.scss in scss folder.

## Requirements

None.

## Variables

Available variables are listed below, along with default values (see `bootstrap/defaults/main.yml` and `nodejs/defaults/main.yml`):
    
    bootstrap_version: "4.4.1"

Bootstrap version to install.

    bootstrap_directory: "/home/alain/bootstrap_css"

Folder where to install bootstrap working dir. Change this ;-)

    nodejs_version: "12.x"

The Node.js version to install. "12.x" is the default and works on most supported OSes. Other versions such as "8.x", "10.x", "13.x", etc. should work on the latest versions of Debian/Ubuntu and RHEL/CentOS.

    nodejs_install_npm_user: "{{ ansible_ssh_user }}"

The user for whom the npm packages will be installed can be set here, this defaults to `ansible_user`.

    npm_config_prefix: "/usr/local/lib/npm"

The global installation directory. This should be writeable by the `nodejs_install_npm_user`.

    npm_config_unsafe_perm: "false"

Set to true to suppress the UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail.

    nodejs_npm_global_packages: []

A list of npm packages with a `name` and (optional) `version` to be installed globally. For example:

    nodejs_npm_global_packages:
      # Install a specific version of a package.
      - name: jslint
        version: 0.9.3
      # Install the latest stable release of a package.
      - name: node-sass
      # This shorthand syntax also works (same as previous example).
      - node-sass
<!-- code block separator -->

    nodejs_package_json_path: ""

Set a path pointing to a particular `package.json` (e.g. `"/var/www/app/package.json"`). This will install all of the defined packages globally using Ansible's `npm` module.

## Dependencies

None.

## How to use

Change variables ! At least, the folder where to install your working dir.

Launch playbook : 

    ansible-playbook install-bootstrap.yml -K

You will be asked for the "BECOME password", this is your sudo password to install packages.

## License

MIT / BSD

## Author Information

This playbook was created in 2020 by Alain Bolli.

The node.js role was created in 2014 by [Jeff Geerling](https://www.jeffgeerling.com/), author of [Ansible for DevOps](https://www.ansiblefordevops.com/).
