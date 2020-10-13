# Usefull Git commands 

| What          |             How                            |
| --------------|--------------------------------------------|
| Git clone	| `git clone <https://name-of-the-repository-link>`         | 
| Creating a new branch in local repository	| `git branch <branch-name>`|
| Creating the branch in the global repository| `git push -u <remote> <branch-name>`| 
| Viewing branches | `git branch`<br> `git branch --list`|
| Deleting a branch | `git branch -d <branch-name>` |
| Viewing branches: | `git branch or git branch --list`<br>`git branch -d <branch-name>`|
| Git checkout (switching from one branch to another) |`git checkout <name-of-your-branch>` <br> `git checkout -b <name-of-your-branch>`|
| Git status	| `git status` |
| Git add	| `git add <file>` <br> `git add -A`|
| Git commit |`git commit -m "commit message"`|
| Git push	| `git push <remote> <branch-name>` <br> `git push --set-upstream <remote> <name-of-your-branch>` <br> `git push -u origin <branch_name>`|
| Git pull	| `git pull <remote>`|
| Git revert |`git revert 3321844` |
| Git merge	| `git merge` |

##### First you should switch to the dev branch:
`git checkout dev`
##### Before merging, you should update your local dev branch:
`git fetch`
##### Finally, you can merge your feature branch into dev:
`git merge <branch-name>`




