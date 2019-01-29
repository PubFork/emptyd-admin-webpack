import React, { Component } from "react";
import { Button } from 'antd';
import { hot } from 'react-hot-loader';
import freetool from 'freetool';

import components from '@components/load-component';

const { GetType } = freetool;
const { Edocument, Edrawer  , EListHoc } = components;

const data = [{
  key: '1',
  title: 'title',
  explain: "抽屉的标题",
  type:"string",
  default: '-',
},{
  key: '2',
  title: 'visible',
  explain: "组件的显示隐藏",
  type:"boolean",
  default: "false",
},{
  key: '3',
  title: 'onClose',
  explain: "点击遮罩层 或 回退按钮 或 右上角叉或取消按钮的回调，children 的类型为React.ReactNode时 可在children组件的props中获取到 onClose 关闭抽屉",
  type:"function(event)",
  default: '-',
},{
  key: '4',
  title: 'closable',
  explain: "是否显示右上角的关闭按钮",
  type:"boolean",
  default: 'true',
},{
  key: '5',
  title: 'placement',
  explain: "抽屉的方向 top | right | bottom | left",
  type:"string",
  default: 'right',
},{
  key: '6',
  title: 'params',
  explain: "children 的类型为React.ReactNode时 可在children组件的props中获取到的params 参数",
  type:"any",
  default: '-',
},{
  key: '7',
  title: 'children',
  explain: "抽屉的内容",
  type:"any",
  default: '-',
},{
  key: '8',
  title: '...restet',
  explain: "剩余参数可参照 antd 官网自行配置 ",
  type:"any",
  default: '-',
}];

@hot(module)
class EdrawerDocuments extends Component<any, any> {
  constructor(props){
    super(props);
    this.handleClose = this.eDrawerController.bind(this,false);
    this.handleShow = this.eDrawerController.bind(this,true);
  }

  state={
    visible:false,
  }

  eDrawerController(visible){
    this.setState((prevState,props)=>{
      return{
        visible
      }
    })
  }

  render() {

    const EDprops = {
			title:`抽屉组件标题`,
			visible:this.state.visible,
			onClose:this.handleClose,
			closable:true,
			placement:"right",
    }
    
    const groupEDprops = {
      ...EDprops,
      params:{
        name:"freemenL",
        deptName:"技术研发部",
        dutyType:"早班",
        startTime:"9:00",
        endTime:"6:00",
        onRange:"9:00-9:30",
        offRange:"6:00-11:59",
        duration:"1小时"
      }
    }

    // const List =  EListHoc.component({
    //   "班次名称":"name",
    //   "所属部门":"deptName",
    //   "班次类型":"dutyType",
    //   "上班时间":"startTime",
    //   "下班时间":"endTime",
    //   "上班打卡时间范围":"onRange",
    //   "下班打卡时间范围":"offRange",
    //   "午休时间":"duration"
    // });
    // console.log(EListHoc.component({data:{ "午休时间":"duration"}}));
    
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="抽屉组件:Edrawer"
          components={[{
            component:(
              <section>
                <Button onClick={ this.handleShow }>抽屉组件</Button>
                <Edrawer.component {...EDprops}>
                    <p>终于等到你，还好没放弃...</p>
                    <p>接下来自由发挥吧...</p>
                </Edrawer.component>  
              </section>
            ),
            titDescripttion:"基本用法123123",
            code:`
              import components from '@components/load-component';
              const { Edrawer } = components;
    
              class EdrawerDocuments exrends Component{

                constructor(props){
                  super(props);
                  this.handleClose = this.eDrawerController.bind(this,false);
                  this.handleShow = this.eDrawerController.bind(this,true);
                }
              
                state={
                  visible:false,
                }
              
                eDrawerController(visible){
                  this.setState((prevState,props)=>{
                    return{
                      visible
                    }
                  })
                }
                              
                render(){

                  const EDprops = {
                    title:"抽屉组件标题",
                    visible:this.state.visible,
                    onClose:this.handleClose,
                    closable:true,
                    placement:"right",
                    params:{userId:12300}
                  }

                  return(
                    <section>
                      <Button onClick={this.handleShow}>抽屉组件</Button>
                      <Edrawer.component {...EDprops}>
                          <p>终于等到你，还好没放弃...</p>
                          <p>接下来自由发挥吧...</p>
                      </Edrawer.component>  
                    </section>
                  )
                }
              }
            ` 
          },{
            component:(
              <section>
                <Button onClick={this.handleShow}>抽屉组件</Button>
                <Edrawer.component {...EDprops}>
                 
                </Edrawer.component>  
              </section>
            ),
            titDescripttion:"基本用法",
            code:`
              import components from '@components/load-component';
              const { Edrawer } = components;
    
              class EdrawerDocuments exrends Component{

                constructor(props){
                  super(props);
                  this.handleClose = this.eDrawerController.bind(this,false);
                  this.handleShow = this.eDrawerController.bind(this,true);
                }
              
                state={
                  visible:false,
                }
              
                eDrawerController(visible){
                  this.setState((prevState,props)=>{
                    return{
                      visible
                    }
                  })
                }
                              
                render(){

                  const EDprops = {
                    title:"抽屉组件标题",
                    visible:this.state.visible,
                    onClose:this.handleClose,
                    closable:true,
                    placement:"right",
                    params:{userId:12300}
                  }

                  return(
                    <section>
                      <Button onClick={this.handleShow}>抽屉组件</Button>
                      <Edrawer.component {...EDprops}>
                          <p>终于等到你，还好没放弃...</p>
                          <p>接下来自由发挥吧...</p>
                      </Edrawer.component>  
                    </section>
                  )
                }
              }
            ` 
          }]}
          docDescripttion="Edrawer 属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EdrawerDocuments;
