import jwt from "jsonwebtoken";
import { createError } from "./../utils/error.js";

//*This Verify if there is token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};

//* This Verify Only if the logged in user can have access to this API of update delete ect...
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        //* i'm checking if the user who logged is an admin or user the performed this
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};