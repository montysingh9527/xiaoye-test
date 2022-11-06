<template>
    <div class="wrap">
        <div class="switch-box">
            <input type="checkbox" id="switch" />
            <label for="switch" class="switch">
                <span class="round"></span>
            </label>
        </div>
    </div>
</template>
<style scoped lang="scss">
.wrap {
    width: 350px;
    height: 200px;
    margin: 200px auto;
    .switch-box {
        position: relative;
        width: 350px;
        height: 200px;
        border-radius: 100px;
        background-color: #77d672;
        border: 3px solid #ddd;
        overflow: hidden; // 超出隐藏   
        .switch {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 95px;
            box-sizing: border-box;
            cursor: pointer;
            transform: all .2s;
            .round {
                display: block;
                position: absolute;
                top: 3px;
                left: 3px;
                width: 194px;
                height: 194px;
                box-shadow: 0 0 10px #ccc;
                background-color: #fff;
                border-radius: 50%;
            }
        }
        input[type="checkbox"]{
            visibility: hidden;
        }
        input[type="checkbox"]:checked + label {
            left: 150px;
            background-color: #77d672;
        }
    }

}
</style>
