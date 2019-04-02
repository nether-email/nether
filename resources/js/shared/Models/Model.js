import {get, has, isArray, map, replace, kebabCase} from 'lodash';
import store from './../../plugins/store';
import Collection from './Collection';

export default class Model {
    constructor(data) {
        this.attributes = get(data, 'attributes', {});
        this.relationships = get(data, 'relationships', {});
        this._type = get(data, 'type');
    }

    /**
     * Retrieve the objects behind a relation array of instance.
     *
     * @param name
     * @param def
     * @returns {Model|Collection}
     */
    getRelation(name, def) {
        let relation = def || null;

        // Check whether a relationship exists.
        if (has(this.relationships, name)) {
            let data = get(this.relationships, [name, 'data']);

            // Check whether the relationship contains multiple results.
            if (isArray(data)) {
                // A reference is an object {type: 'teams', id: 1}
                const items = map(data, (reference) => {
                    return store.getters.find(reference);
                });

                return new Collection(null, items);
            } else {
                return store.getters.find(data);
            }
        }

        return relation;
    }

    static get key() {
        return 'attributes.id';
    }

    /**
     * The JSON API type of the model. We can potentially fall back
     * on the current model class name.
     *
     * @returns {string}
     */
    static get type() {
        return this._type || replace(kebabCase(this.name) + 's', '-', '_');
    }

    get keyValue() {
        return get(this, this.constructor.key);
    }

    /**
     * Relations to include by default.
     * @returns {Array}
     */
    static get includes() {
        return [];
    }
}
