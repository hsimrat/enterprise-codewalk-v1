# enterprise-codewalk-v1
Showcasing Destructuring , Api calls , nullish coalescing and few more tips

Use this command from mock-api directory for json-server
(Or if you're outside the folder, use the full path)

json-server --watch mock-api/db.json --port 4000

(You can also add it to your package.json)

In Postman . open and try :

GET http://localhost:4000/users/1

PUT http://localhost:4000/users/1

Note :
> “Note: PUT in `json-server` will overwrite the whole object.  
> If you don’t include all fields — like `settings` or `theme` — they’ll be deleted.  
>  
> For safe updates, either use `PATCH`, or always send the full object.”


## Clone This Repo
```bash
git clone https://github.com/hsimrat/enterprise-codewalk-v1.git




