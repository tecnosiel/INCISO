export class User {
    constructor(properties) {
        if (properties) {
            // copy properties over
            for (let key in properties) {
                if (properties.hasOwnProperty(key)) {
                    this[key] = properties[key];
                }
            }
            // if (properties.roles) {
            // 	this.roles = properties.roles;
            // 	this.functions = getDistinctFunctions(properties.roles);
            // }
        }
        this.delegations = this.delegations || [];
    }
    get displayName() {
        if (this.owner && this.owner.firstname && this.owner.lastname) {
            return `${this.owner.firstname} ${this.owner.lastname}`;
        }
        else {
            return this.username;
        }
    }
    get activeDelegation() {
        for (var i = 0; i < this.delegations.length; i++) {
            if (this.sessionInfo && this.delegations[i].represented.id === this.sessionInfo.currentRepresentedId) {
                return this.delegations[i];
            }
        }
        return null;
    }
    set isAuthenticated(value) {
        // just a dummy one...as we ignore the isAuthenticated property from the server
        this._dummyValue = value;
    }
    get isAuthenticated() {
        return this.sessionInfo !== null && typeof (this.sessionInfo) !== 'undefined';
    }
    hasRole(name) {
        if (this.currentAccreditations) {
            for (let accreditation of this.currentAccreditations) {
                if (accreditation.qualification && accreditation.qualification.uid === name) {
                    return true;
                }
            }
        }
        return false;
    }
    getDelegation(id) {
        if (this.delegations) {
            let foundDelegation = null;
            this.delegations.forEach(delegation => {
                if (delegation.represented.id === id) {
                    // we found the delegation
                    foundDelegation = delegation;
                    return;
                }
            });
            return foundDelegation;
        }
        return null;
    }
    hasDelegationChanged(newRepresentedId) {
        return this.sessionInfo.currentRepresentedId !== newRepresentedId;
    }
}
//# sourceMappingURL=user.js.map