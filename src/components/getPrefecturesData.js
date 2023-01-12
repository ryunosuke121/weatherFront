import {areas} from './areaDefinition';

const getPrefecturesData = () => {
    let prefectureList = [];
    areas.prefecture_list.forEach( prefecture =>{
        prefectureList.push(prefecture.prefecture_name)
    }
    )
    return prefectureList;
  };
  
export { getPrefecturesData };