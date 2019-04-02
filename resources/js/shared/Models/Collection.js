import {head, size, values, get, set, mapValues, clone} from 'lodash';
import store from './../../plugins/store';

export default class Collection {
    constructor(type, items) {
        this._type = type;
        this.items = items || {};

        this.refreshKeys();
    }

    get type() {
        if (this._type) {
            return this._type;
        }

        const first = this.first;

        if (first && store.state[first._type]) {
            return store.state[first._type].type;
        }

        return null;
    }

    get first() {
        return head(this.toArray);
    }

    get size() {
        return size(this.items);
    }

    get isEmpty() {
        return this.size === 0;
    }

    get isNotEmpty() {
        return this.size > 0;
    }

    get toArray() {
        return values(this.items);
    }

    merge(collection) {
        if (!collection) {
            return;
        }

        if (collection.type.type !== this.type.type) {
            console.error("Collections with different types cannot be merged.");
        }

        collection.toArray.forEach(item => {
            this.items[item.keyValue] = item;
        });
    }

    refreshKeys() {
        if (this.type) {
            let items = {};

            this.toArray.forEach(item => {
                items[item.keyValue] = item;
            });

            this.items = items;
        }
    }

    saveResponse(response) {
        const data = get(response, 'data', response);

        let models = mapValues(data, (item) => {
            return new this.type(get(item, 'data', item));
        });

        let collection = clone(this);

        collection.items = models;
        collection.refreshKeys();

        return collection;
    }

    get(key, def) {
        return get(this.items, key, def || false);
    }

    set(key, value) {
        set(this.items, key, value);
    }
}
