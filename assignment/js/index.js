"use strict";

let app = {};


app.data = {    
    data: function() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value7: null,
            value8: null,
            value11: null,
            checkedbox: false
        };
    },
    computed: {
        // Complete.
        value4(){
            let value1 = this.value1 || 0
            let value2 = this.value2 || 0
            let value3 = this.value3 || 0
    
            return value1 + value2 + value3
        },
        value5(){
            if (this.checkedbox){
                return 27700
            } else {
                return 13850
            }
        },
        value6(){
            let value4 = this.value4 || 0
            let value5 = this.value5 || 0
            if (value5 > value4){
                return 0
            } else {
                return value4 - value5
            }
        },
        value9(){
            let value7 = this.value7 || 0
            let value8 = this.value8 || 0

            return value7 + value8
        },

        // var rates = [[10, 0, 0]
        //      [12, 11000, 22000],
        //      [22, 44725, 89450],
        //      [24, 95375, 190750],
        //      [32, 182100, 364200],
        //      [35, 231250, 462500],
        //      [37, 578125, 693750]]

        value10(){
            if (this.value6 == null){
                return 0
            }
            let value6 = this.value6 || 0
            if (!this.checkedbox){
                if (value6 < 11000){
                    return (0.10 * value6)
                } else if (value6 < 44725){
                    return (0.12 * (value6 - 11000)) + 1100
                } else if (value6 < 95375){
                    return (0.22 * (value6 - 44725)) + 4047 + 1100
                } else if (value6 < 182100){
                    return (0.24 * (value6 - 95375)) + 11143 + 4047 + 1100
                } else if (value6 < 231250){
                    return (0.32 * (value6 - 182100)) +  20814 + 11143 + 4047 + 1100
                } else if (value6 < 578125){
                    return (0.35 * (value6 - 231250)) + 15728 + 20814 + 11143 + 4047 + 1100
                } else {
                    return (0.37 * (value6 - 578125)) + 121406.25 + 15728 +  20814 + 11143 + 4047 + 1100
                }
            } else{
                if (value6 < 22000){
                    return (0.10 * value6)
                } else if (value6 < 89450){
                    return (0.12 * (value6 - 22000)) + 2200
                } else if (value6 < 190750){
                    return (0.22 * (value6 - 89450)) + 8094 + 2200
                } else if (value6 < 364200){
                    return (0.24 * (value6 - 190750)) + 22286 + 8094 + 2200
                } else if (value6 < 462500){
                    return (0.32 * (value6 - 364200)) + 41628 + 22286 + 8094 + 2200
                } else if (value6 < 693750){
                    return (0.35 * (value6 - 462500)) + 31456 + 41628 + 22286 + 8094 + 2200
                } else {
                    return (0.37 * (value6 - 693750)) + 80937.5 + 31456 + 41628 + 22286 + 8094 + 2200
                }
            }
        },
        value12(){
            let value10 = this.value10 || 0
            let value11 = this.value11 || 0
            
            return value11 + value10
        },
        value13(){
            // 13 If line 9 is larger than line 12, subtract line 12 from line 9. This is your refund
            let value9 = this.value9 || 0
            let value12 = this.value12 || 0
            if (value9 > value12){
                return value9 - value12
            } else {
                return 0
            }
        },
        value14(){
            // 14 If line 12 is larger than line 9, subtract line 9 from line 12. This is the amount you owe
            let value9 = this.value9 || 0
            let value12 = this.value12 || 0
            if (value9 < value12){
                return value12 - value9
            } else {
                return 0
            }
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
app.vue.recompute();

