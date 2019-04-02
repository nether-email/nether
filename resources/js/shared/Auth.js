export default class Auth {

    static get guest() {
        return 'guest';
    }

    static get user() {
        return 'user';
    }

    static get unverified() {
        return 'unverified';
    }

    static get admin() {
        return 'admin';
    }

    static check(user, role) {
        if (!user && role == this.guest) {
            return true;
        }

        if (!user) {
            return false;
        }

        if (role == this.unverified && ! Auth.verified(user)) {
            return true;
        }

        if (role == this.admin && Auth.admin(user)) {
            return true;
        }

        if (role == this.user) {
            return true;
        }

        return false;
    }

    static verified(user) {
        return user && user.attributes.email_verified_at;
    }

    static admin(user) {
        return user && user.attributes.is_admin;
    }
}
