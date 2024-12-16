import * as mongoose from 'mongoose'
import Elysia from 'elysia'
import { cors } from '@elysiajs/cors'
import { User } from './models/user'
import { Request } from './models/request'
import { Helper } from './models/helper'

const db = await mongoose.connect("mongodb+srv://joshua:BEjnCT1vVMK8Wg8S@cluster0.s9dkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

interface LoginRequestBody {
    name: "string",
    password: "string"
}

new Elysia()
    .use(cors())
    .post("/user", async ({ body, set }) => {
        const newUser = new User({
            name: body.name,
            password: body.password
        });
        try {
            await newUser.save()
        } catch (error) {
            set.status = 400
            return error
        }
        return newUser
    })

    .post("/helper", async ({ body, set }) => {
        const newHelper = new Helper({
            name: body.name,
            password: body.password,
            skills: body.skills,
            rating: body.rating
        })
        try {
            await newHelper.save()
        } catch (error) {
            set.status = 400
            return error
        }
        return newHelper
    })

    .post("/request", async ({ body, set }) => {
        const newRequest = new Request({
            product: body.product,
            problem: body.problem,
            description: body.description
        })
        try {
            await newRequest.save()
        } catch (error) {
            set.status = 400
            return error
        }
        return newRequest
    })

    .post("/login", async ({ body, set }) => {
        const { name, password } = body as LoginRequestBody;

        const user = await User.findOne({ name });

        if (!user) {
            set.status = 404;
            return { message: "User not found" };
        }

        if (user.password !== password) {
            set.status = 401;
            return { message: "Invalid pasword" };
        }

        return { message: "Login successful", user }
    })

    .listen(3030);
console.log("Listening at 3030")