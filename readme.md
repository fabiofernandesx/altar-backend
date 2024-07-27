# Full Stack Exercise # 1223

## Backend

## Instructions

- [ ] Clone the Repository
- [ ] Install the packages (npm install)
- [ ] Run Prisma Commands (npx prisma generate and npx prisma db pull)
- [ ] Run the code

## Dependencies

This code runs by itself but for a full experience an UI project can be found [https://github.com/fabiofernandesx/altar] (on this repository)

## Database

The project uses sqlite as database to run it for the first time on your machine, remember to execute the Prisma Commands As we use prisma here it's easy to change the database only need to change the schema.prisma file inside the prisma folder

## CI/CD

Part of the CI/CD work is done on this repository. A docker image is created at any pull request to the main branch. This image is also pushed to dockerhub and can be used with this command: `docker run -e ARRAY_SIZE=100 -e BIAS_WEIGHT=20 -e PORT=3000 -e CLIENT_URL='http://localhost' -e DATABASE_URL='file:./dev.db' -p 3000:3000 fabiofernandes/altar-back`

## Warnings

- Pay attention to the long list of environment variables, they are needed and the system will not run if anyone of these variables are missing. In dev you only need to maintain the .env file configured, running the docker version or to deploy in production, the variables need to be passed to the container

- The database used here is sqlite, it's perfectly usable, even in production, but you need to configure the mapping to a folder into a vps, an NFS path or something, otherwise when the image is re-build and goes live your data will be lost
