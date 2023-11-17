
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


