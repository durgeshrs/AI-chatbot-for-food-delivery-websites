import jwt from 'jsonwebtoken';

const authorisationMiddleware = (requiredRole) => (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Authorization header missing or invalid' });
    }

    // Extract the token from the Bearer schema
    const token = authHeader.split(' ')[1];

    try {
        // Decode the token to get the user role
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Extract the role from the decoded token
        const userRole = decodedToken.role;

        if (!userRole) {
            return res.status(403).json({ success: false, message: 'User role not found in token' });
        }

        // Check if the user role matches the required role
        if (userRole !== requiredRole) {
            return res.status(403).json({ success: false, message: 'Access Denied, Insufficient Permissions' });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default authorisationMiddleware;
