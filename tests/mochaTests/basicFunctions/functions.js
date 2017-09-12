
var functions = {

    disemvowel: function(str) {
        if (typeof str === 'number') {
            return String(str);
        }

        return str.replace(/[aeiou]/gi, '');
    },

    allCaps: function(str) {
        if (typeof str === 'number') {
            return String(str);
        }

        return str.toUpperCase();
    },

    removeSpace: function(str) {
        if (typeof str === 'number') {
            return String(str);
        }

        return str.replace(/ +/g, '');
    }

}

module.exports = functions;