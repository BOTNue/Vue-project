import * as mongoose from 'mongoose'
import Elysia from 'elysia'
import { User } from './models/user'
import { Upload } from './models/upload'
import { Helper } from './models/helper'

const db = await mongoose.connect("mongodb+srv://joshua:BEjnCT1vVMK8Wg8S@cluster0.s9dkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

new Elysia()
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

    .listen(3030);