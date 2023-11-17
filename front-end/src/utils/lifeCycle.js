
//logic used to execute code that are within components that are only executed after the content is rendered on the screen

function run(renderList){
    for(const callback of renderList){
        callback();
    }
}

const beforeRenderList = [];

export function beforeRender(callback){
    beforeRenderList.push(callback);
}

export function lifeCycleInit(){
    run(beforeRenderList);
}


