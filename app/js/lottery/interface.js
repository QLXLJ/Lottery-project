//接口文件
import $ from 'jquery'
// import { Interface } from 'readline';
class Interface{
    /**
     * 获取遗漏数据
     */
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
           $.ajax({
               url: '/get/omit',
               data:{
                   issue: issue
               },
               dataType: 'json',
               success: function(res){
                   self.setOmit(res.data)
                   resolve.call(self,res)
               },
               error: function(err){
                   reject.call(err)
               }
           })
        })
    }
    /**
     * 获取开奖号码的接口
     */
    getOpenCode(issue){
        let self = this
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: '/get/opencode',
                data:{
                    issue:issue
                },
                dataType: 'json',
                success: function(res){
                   self.setOpenCode(res.data)
                   resolve.call(self,res)
                },
                error: function(err){
                   reject.call(err)
                }
            })
        })
    }
    /**
     * 获取当前的状态
     */
    getState(issue){
        let self = this;//保留this的指向
        //用promise解决异步操作的问题
        return new Promise((resolve,reject)=>{
           $.ajax({
               url: '/get/state',
               data:{
                   issue: issue
               },
               dataType: 'json',
               success: function(res){
                   resolve.call(self,res)
               },
               error: function(err){
                   reject.call(err)
               }
           })
        })
    }
}
export default Interface