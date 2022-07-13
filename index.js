import ajax, { createApi } from '@/api/ajax'
import { baseUrl, fileUrl, Url } from '@/config.json'
export class Api {
  /**
   * ajax方法
   */
  request = ajax

  getFileBaseUrl () {
    if (process.env.NODE_ENV !== 'production') {
      return 'https://test.hccb.cc' + fileUrl
    } else {
      return fileUrl
    }
  }

  /**
   * 下载文件
   */
  @createApi({
    url: '{restfulParam}',
    responseType: 'blob',
    transformRequest (data) {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        data[key] !== undefined && formData.append(key, data[key])
      })
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  downloadFile

  /**
   * 下载文件
   */
  @createApi({
    url: '{restfulParam}',
    method: 'GET',
    responseType: 'blob',
    transformRequest (data) {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        data[key] !== undefined && formData.append(key, data[key])
      })
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  downloadFileByGet

  /**
   * 上传文件
   */
  @createApi({
    url: '{restfulParam}',
    transformRequest ({ file, operNo, sessionAppKey, facebookId, facebookName }) {
      const formData = new FormData()
      formData.append('file', file)
      if (operNo) {
        formData.append('operNo', operNo)
      }
      if (sessionAppKey) {
        formData.append('sessionAppKey', sessionAppKey)
      }
      if (facebookId) {
        formData.append('facebookId', facebookId)
      }
      if (facebookName) {
        formData.append('facebookName', facebookName)
      }
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  uploadFile

  /**
   * 系统公告上传图片
   */
  @createApi({
    url: '/file/uploadDesc',
    custom: true,
    closeLoading: true,
    transformRequest ({ upfile }) {
      const formData = new FormData()
      formData.append('upfile', upfile)
      return formData
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  uploadNoticeImage

  /**
   * 系统公告上传附件
   */
  @createApi({
    url: '/file/uploadFile',
    transformRequest ({ upfile }) {
      const formData = new FormData()
      formData.append('upfile', upfile)
      return formData
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  uploadNoticeFile

  /*
   * 上传二维码文件
   */
  @createApi({
    url: '{restfulParam}',
    transformRequest ({ file, operNo, sessionAppKey }) {
      const formData = new FormData()
      formData.append('upfile', file)
      if (operNo) {
        formData.append('operNo', operNo)
      }
      if (sessionAppKey) {
        formData.append('sessionAppKey', sessionAppKey)
      }
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  uploadImgFile

  /**
   * 心理测评上传文件
   */
  @createApi({
    url: '{restfulParam}',
    transformRequest (params) {
      console.log(params)
      const formData = new FormData()
      Object.keys(params).forEach(key => {
        params[key] !== undefined && formData.append(key, params[key])
      })
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  psychologyUploadFile

  /**
   * 根据批次导入校招申请表
   */
  @createApi({
    url: '{restfulParam}',
    transformRequest ({ file, batch }) {
      const formData = new FormData()
      formData.append('file', file)
      if (batch) {
        formData.append('batch', batch.batchNo)
        formData.append('batchName', batch.batchName)
        formData.append('operNo', batch.operNo)
      }
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  uploadFileWithBatch

  /**
   * 获取文件blob
   */
  @createApi({
    url: '{restfulParam}',
    custom: true,
    method: 'get',
    responseType: 'blob'
  })
  getFileBlob

  /**
   * 登陆
   */
  @createApi({ url: baseUrl + '/hzzpImLogin/login', notNeedAuth: true })
  login

  /**
   * 获取用户信息
   */
  @createApi({ url: baseUrl + '/hzzpImLogin/loginOperatorInfo', method: 'get' })
  getUserInfo

  /**
   * 获取用户菜单信息
   */
  @createApi({ url: baseUrl + '/adminMenu/queryAdminMenu' })
  getMenuList

  /**
   * 获取全部菜单信息
   */
  @createApi({ url: baseUrl + '/adminMenu/queryAllMenu', method: 'get' })
  getAllMenuList

  /**
   * 根据角色id获取对应菜单列表
   */
  @createApi({ url: baseUrl + '/adminMenu/queryRoleMenu', method: 'get' })
  getMenuListByRoleId

  /**
   * 新增菜单
   */
  @createApi({ url: baseUrl + '/adminMenu/addAdminMenu' })
  addAdminMenu

  /**
   * 修改菜单
   */
  @createApi({ url: baseUrl + '/adminMenu/updateAdminMenu' })
  updateAdminMenu

  /**
   * 删除菜单
   */
  @createApi({ url: baseUrl + '/adminMenu/deleteAdminMenu', method: 'get' })
  deleteAdminMenu

  /**
   * 获取全部角色列表
   */
  @createApi({ url: baseUrl + '/adminRole/findAll', method: 'get' })
  getAllRoleList

  /**
   * 新增角色
   */
  @createApi({ url: baseUrl + '/adminRole/addAdminRole' })
  addAdminRole

  /**
   * 修改角色
   */
  @createApi({ url: baseUrl + '/adminRole/updateAdminRole' })
  updateAdminRole

  /**
   * 删除角色
   */
  @createApi({ url: baseUrl + '/adminRole/deleteAdminRole', method: 'get' })
  deleteAdminRole

  /**
   * 编辑角色对应菜单
   */
  @createApi({ url: baseUrl + '/adminRole/addRoleMenu', contentType: 'form' })
  addRoleMenu

  /**
   * 获取机构列表树
   */
  @createApi({ url: baseUrl + '/admin/listTrees', method: 'get', notNeedAuth: true })
  queryListTrees

  /**
   * 根据组织机构id查询员工列表
   */
  @createApi({ url: baseUrl + '/admin/findEmpSearch', method: 'get' })
  findEmpSearch

  /**
   * 查询字典集
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryDictionary', notNeedAuth: true })
  queryDictionary

  /**
   * 字典表列表
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/query', method: 'get' })
  queryPmhSpmaBase

  /**
   * 删除字典表列表项
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/delete/{restfulParam}', method: 'delete' })
  deletePmhSpmaBase

  /**
   * 新增字典表项
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/add' })
  addPmhSpmaBase

  /**
   * 编辑字典表项
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/update/{restfulParam}' })
  updatePmhSpmaBase

  /**
   * 查询字典表项
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/{restfulParam}', method: 'get' })
  getPmhSpmaBase

  /**
   * 关键字查询专业列表
   */
  @createApi({ url: baseUrl + '/applyResumeInf/queryProfession', closeLoading: true })
  queryProfession

  /**
   * 查询志愿数量配置
   */
  @createApi({ url: baseUrl + '/applyPositionInf/querySystemParameterFor', notNeedAuth: true })
  queryWishNo

  /**
   * 根据批次名称模糊查询岗位列表
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryPositionByBatch', closeLoading: true })
  queryPositionByBatch

  /**
   * 查询简历列表
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryByPageForView', method: 'get' })
  queryApplyList

  /**
   * 查询简历详情
   */
  @createApi({ url: baseUrl + '/applyPositionInf/resumeDetail', method: 'get' })
  queryResumeDetail

  /**
   * 导入hr系统
   */
  @createApi({ url: baseUrl + '/applyPositionInf/sendToHr', contentType: 'form' })
  exportToHrSys

  /**
   * 查询系统公告列表
   */
  @createApi({ url: baseUrl + '/systemNotice/query', method: 'get' })
  querySystemNotice

  /**
   * 删除系统公告 单条
   */
  @createApi({ url: baseUrl + '/systemNotice/{restfulParam}', method: 'delete' })
  deleteSystemNotice

  /**
   * 删除系统公告 批量
   */
  @createApi({ url: baseUrl + '/systemNotice/deleteByIds', method: 'delete' })
  batDeleteSystemNotice

  /**
   * 发布系统公告
   */
  @createApi({ url: baseUrl + '/systemNotice/publish/{restfulParam}' })
  publishSystemNotice

  /**
   * 保存公告 含直接发布
   */
  @createApi({ url: baseUrl + '/systemNotice/create', contentType: 'form' })
  createSystemNotice

  /**
   * 查询系统公告详情
   */
  @createApi({ url: baseUrl + '/systemNotice/{restfulParam}', method: 'get' })
  querySystemNoticeDetail

  /**
   * 获取操作员分页列表
   */
  @createApi({ url: baseUrl + '/admin/queryByPage', method: 'get' })
  getUserList

  /**
   * 获取操作员分页列表
   */
  @createApi({ url: baseUrl + '/admin/queryByPage', method: 'get', closeLoading: true })
  getUserListWithoutLoading

  /**
   * 根据id获取操作员信息
   */
  @createApi({ url: baseUrl + '/admin/queryOne', method: 'get' })
  getUserById

  /**
   * 删除操作员
   */
  @createApi({ url: baseUrl + '/admin/deleteAdmin', method: 'get' })
  deleteUserById

  /**
   * 新增操作员
   */
  @createApi({ url: baseUrl + '/admin/addAdmin', contentType: 'form' })
  addUser

  /**
   * 编辑操作员信息
   */
  @createApi({ url: baseUrl + '/admin/updateAdmin', contentType: 'form' })
  updateUser

  /**
   * 查询日志列表
   */
  @createApi({ url: baseUrl + '/logger/query', method: 'get' })
  searchLog

  /**
   * 查询短信模版列表
   */
  @createApi({ url: baseUrl + '/msgTemp/query', method: 'get' })
  queryMsgTemp

  /**
   * 查询短信模版详情
   */
  @createApi({ url: baseUrl + '/msgTemp/{restfulParam}', method: 'get' })
  queryMsgTempById

  /**
   * 新增短信模版
   */
  @createApi({ url: baseUrl + '/msgTemp/create' })
  createMsgTemp

  /**
   * 切换短信模版停/启用状态
   */
  @createApi({ url: baseUrl + '/msgTemp/alterMesgStt/{restfulParam}', method: 'get' })
  alertMesgStt

  /**
   * 删除短信模版
   */
  @createApi({ url: baseUrl + '/msgTemp/{restfulParam}', method: 'delete' })
  deleteTpl

  /**
   * 批量删除短信模版
   */
  @createApi({ url: baseUrl + '/msgTemp/deleteByIds', method: 'delete' })
  deleteMsgTempByIds

  /**
   * 查询短信模版名称
   */
  @createApi({ url: baseUrl + '/msgTemp/queryMsgTitle', notNeedAuth: true })
  queryMsgTitle

  /**
   * 发送短信
   */
  @createApi({ url: baseUrl + '/applyPositionInf/sendMessage' })
  sendMessage

  /**
   * 新增筛选流程（手动配置）
   */
  @createApi({ url: baseUrl + '/applyProcess/saveApplyProcess', contentType: 'form' })
  saveApplyProcess

  /**
   * 新增筛选流程（选择已有流程）
   */
  @createApi({ url: baseUrl + '/applyProcess/savePositionProcess', contentTypt: 'form' })
  savePositionProcess

  /**
   * 查询所有流程
   */
  @createApi({ url: baseUrl + '/applyProcess/queryProcess', notNeedAuth: true })
  queryProcess

  /**
   * 查询默认流程
   */
  @createApi({ url: baseUrl + '/applyProcess/queryDefaultProcess', notNeedAuth: true })
  queryDefaultProcess

  /**
   * 查询所有批次
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryBatch', notNeedAuth: true }, res => res.result)
  queryBatch

  /**
   * 根据权限查询所有批次
   */
  @createApi({ url: baseUrl + '/applyPositionInf/applyQueryBatch', notNeedAuth: true }, res => res.result)
  applyQueryBatch

  /**
   * 查询批次对应可投递志愿数量
   */
  @createApi({
    url: baseUrl + '/applyPositionInf/queryDeliverNumNew',
    closeLoading: true
  })
  queryDeliverNumNew

  /**
   * 更新批次信息
   */
  @createApi({ url: baseUrl + '/employInfo/updateBatchEmployInfo' })
  updateBatchEmployInfo

  /**
   * 根据批次号查询岗位
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryPositionByBatchNo' }, res => res.result)
  queryPositionByBatchNo

  /**
   * 查询所有岗位列表
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryByPageResume', method: 'get' })
  queryByPageResume

  /**
   * 根据批次号、岗位编号查询流程
   */
  @createApi({ url: baseUrl + '/applyProcess/queryProcessByBatchAndPosition', custom: true })
  queryProcessByBatchAndPosition

  /**
   * 批量修改简历状态
   */
  @createApi({ url: baseUrl + '/applyPositionInf/updateResumeProcessStatus' })
  updateResumeProcessStatus

  /**
   * 查询简历列表
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryResumeByPage', method: 'get' })
  queryResumeByPage

  /**
   * 编辑标签
   */
  @createApi({ url: baseUrl + '/applyPositionInf/updateLabel', contentType: 'form' })
  updateLabel

  /**
   * 查询笔试场次
   */
  @createApi({ url: baseUrl + '/scene/queryByPages', method: 'get' })
  queryScene

  /**
   * 查询笔试场次
   */
  @createApi({ url: baseUrl + '/scene/queryByPages', method: 'get', closeLoading: true })
  querySceneWithoutLoading

  /**
   * 模糊查询笔试场次
   */
  @createApi({ url: baseUrl + '/scene/queryVagueScene' })
  queryVagueScene

  /**
   * 模糊查询笔试场次
   */
  @createApi({ url: baseUrl + '/scene/queryVagueScene', closeLoading: true })
  queryVagueSceneWithoutLoading

  /**
   * 查询笔试场次详情
   */
  @createApi({ url: baseUrl + '/scene/{restfulParam}', method: 'get' })
  querySceneDetail

  /**
   * 保存/修改笔试场次详情
   */
  @createApi({ url: baseUrl + '/scene/updateScene' })
  updateScene

  /**
   * 删除笔试场次
   */
  @createApi({ url: baseUrl + '/scene/{restfulParam}', method: 'delete' })
  deleteScene

  /**
   * 查询题库
   */
  @createApi({ url: baseUrl + '/question/queryByPages', method: 'get' })
  queryQuestion

  /**
   * 查询题目详情
   */
  @createApi({ url: baseUrl + '/question/{restfulParam}', method: 'get' })
  queryQuestionById

  /**
   * 单个删除题目
   */
  @createApi({ url: baseUrl + '/question/{restfulParam}', method: 'delete' })
  deleteQuestion

  /**
   * 批量删除题目
   */
  @createApi({ url: baseUrl + '/question/deleteByIds' })
  batDeleteQuestion

  /**
   * 上传导入的题目
   */
  @createApi({ url: baseUrl + '/question/uploadQuestion', contentType: 'form' })
  uploadQuestion

  /**
   * 上传题目图片
   */
  @createApi({ url: baseUrl + '/question/uploadQuestionPic', contentType: 'form' })
  uploadQuestionPic

  /**
   * 删除题目图片
   */
  @createApi({ url: baseUrl + '/question/deleteQuestionPic' })
  deleteQuestionPic

  /**
   * 保存/更新题目
   */
  @createApi({ url: baseUrl + '/question/updateQuestion', contentType: 'form' })
  updateQuestion

  /**
   * 查询笔试列表
   */
  @createApi({ url: baseUrl + '/exam/queryByPages', method: 'get' })
  queryExamList

  /**
   * 模糊查询考试场次
   */
  @createApi({ url: baseUrl + '/exam/queryExamId', contentType: 'form', closeLoading: true })
  queryExamId

  /**
   * 笔试一键通过
   */
  @createApi({ url: baseUrl + '/exam/passStatus' })
  examAllPass

  /**
   * 笔试计算分数
   */
  @createApi({ url: baseUrl + '/exam/getPoints' })
  calcPoints

  /**
   * 笔试批卷分配
   */
  @createApi({ url: baseUrl + '/corrects/allotExam' })
  allotExam

  /**
   * 查询笔试详情
   */
  @createApi({ url: baseUrl + '/exam/{restfulParam}', method: 'get' })
  queryExamDetail

  /**
   * 清空试卷
   */
  @createApi({ url: baseUrl + '/exam/updateExamStatus' })
  updateExamStatus

  /**
   * 更新主观题得分
   */
  @createApi({ url: baseUrl + '/exam/updateSubPoint' })
  updateSubPoint

  /**
   * 查询主观题详情
   */
  @createApi({ url: baseUrl + '/exam/querySubAnswer' })
  querySubAnswer

  /**
   * 查询笔试管理-简历列表
   */
  @createApi({ url: baseUrl + '/employer/queryByPages', method: 'get' })
  queryEmployer

  /**
   * 微简历管理-查看详情
   */
  @createApi({ url: baseUrl + '/employer/{restfulParam}', method: 'get' })
  queryEmployerDetail

  /**
   * 删除笔试管理-简历
   */
  @createApi({ url: baseUrl + '/employer/{restfulParam}', method: 'delete' })
  deleteEmployer

  /**
   * 新增/编辑人员信息
   */
  @createApi({ url: baseUrl + '/employer/updateResume' })
  updateResume

  /**
   * 查询场景人员
   */
  @createApi({ url: baseUrl + '/exam/queryErByPages', method: 'get' })
  queryExamer

  /**
   * 删除场景人员 单条
   */
  @createApi({ url: baseUrl + '/exam/examer/{restfulParam}', method: 'delete' })
  deleteExamer

  /**
   * 删除场景人员 批量
   */
  @createApi({ url: baseUrl + '/exam/examer/deleteByIds' })
  batDeleteExamer

  /**
   * 导入场景人员
   */
  @createApi({ url: baseUrl + '/exam/uploadExamer', contentType: 'form' })
  uploadExamer

  /**
   * 新增/编辑场景人员
   */
  @createApi({ url: baseUrl + '/exam/updateExamer' })
  updateExamer

  /**
   * 查询登陆账号（人员）
   */
  @createApi({ url: baseUrl + '/employer/queryuserid', method: 'get' })
  queryAccount

  /**
   * 删除登陆账号（人员）
   */
  @createApi({ url: baseUrl + '/employer/userid/{restfulParam}', method: 'delete' })
  deleteAccount

  /**
   * 更新导入账号（人员）信息
   */
  @createApi({ url: baseUrl + '/employer/uploadUserids', contentType: 'form' })
  uploadAccount

  /**
   * 新增/编辑账号（人员）信息
   */
  @createApi({ url: baseUrl + '/employer/updateUserid', contentType: 'form' })
  updateAccount

  /**
   * 查询外包公司
   */
  @createApi({ url: baseUrl + '/company/queryByPages', method: 'get' })
  queryCompany

  /**
   * 更新导入外包公司
   */
  @createApi({ url: baseUrl + '/company/uploadCompany', contentType: 'form' })
  uploadCompany

  /**
   * 删除外包公司 单条
   */
  @createApi({ url: baseUrl + '/company/{restfulParam}', method: 'delete' })
  deleteCompany

  /**
   * 新增/编辑外包公司
   */
  @createApi({ url: baseUrl + '/company/updateCompany' })
  updateCompany

  /**
   * 查询外包公司简历
   */
  @createApi({ url: baseUrl + '/company/queryByResume', method: 'get' })
  queryCompanyResume

  /**
   * 查询外包简历详情
   */
  @createApi({ url: baseUrl + '/company/outResume/findResume', method: 'get' })
  queryCompanyResumeDetail

  /**
   * 一键剔除外包公司简历
   */
  @createApi({ url: baseUrl + '/company/deleteRepeat' })
  deleteRepeat

  /**
   * 查询会议室列表
   */
  @createApi({ url: baseUrl + '/RoomInfo/queryByPage', method: 'get' })
  queryMeetingRoom

  /**
   * 新增会议室
   */
  @createApi({ url: baseUrl + '/RoomInfo/createRoomInfo' })
  createRoomInfo

  /**
   * 编辑会议室
   */
  @createApi({ url: baseUrl + '/RoomInfo/updateRoomInfo' })
  updateRoomInfo

  /**
   * 删除会议室
   */
  @createApi({ url: baseUrl + '/RoomInfo/deleteRoomInfo' })
  deleteRoomInfo

  /**
   * 查询面试者列表
   */
  @createApi({ url: baseUrl + '/MeetingInfo/queryByPage', method: 'get' })
  queryInterviewee

  /**
   * 新增面试者信息
   */
  @createApi({ url: baseUrl + '/MeetingInfo/createMeetingInfo', contentType: 'form' })
  createMeetingInfo

  /**
   * 更新面试者信息
   */
  @createApi({ url: baseUrl + '/MeetingInfo/updateMeetingInfo', contentType: 'form' })
  updateMeetingInfo

  /**
   * 删除面试者信息
   */
  @createApi({ url: baseUrl + '/MeetingInfo/deleteMeetingInfo' })
  deleteMeetingInfo

  /**
   * 查询面试官列表
   */
  @createApi({ url: baseUrl + '/EximanerInfo/queryByPage', method: 'get' })
  queryInterviewerList

  /**
   * 删除面试官
   */
  @createApi({ url: baseUrl + '/EximanerInfo/deleteEximanerInfo' })
  deleteEximanerInfo

  /**
   * 编辑面试官信息
   */
  @createApi({ url: baseUrl + '/EximanerInfo/updateEximanerInfo' })
  updateEximanerInfo

  /**
   * 添加面试官
   */
  @createApi({ url: baseUrl + '/EximanerInfo/createEximanerInfo' })
  createEximanerInfo

  /**
   * 查询应聘用户列表
   */
  @createApi({ url: baseUrl + '/apply/query', method: 'get' })
  queryApplyUserList

  /**
   * 删除应聘用户
   */
  @createApi({ url: baseUrl + '/apply/delete/{restfulParam}', method: 'delete' })
  deleteApplyUser

  /**
   * 更新应聘用户信息
   */
  @createApi({ url: baseUrl + '/apply/update/{restfulParam}' })
  updateApplyUser

  /**
   * 查询招聘岗位统计列表
   */
  @createApi({ url: baseUrl + '/dataStatistics/applyStatistics', method: 'get' })
  queryApplyStatistics

  /**
   * 查询招聘岗位数量统计
   */
  @createApi({ url: baseUrl + '/dataStatistics/empStatistics', method: 'get' })
  queryEmpStatistics

  /**
   * 招聘岗位统计详情
   */
  @createApi({ url: baseUrl + '/dataStatistics/applyStatisticsDetail/{restfulParam}' })
  applyStatisticsDetail

  /**
   * 查询目标院校统计情况
   */
  @createApi({
    url: baseUrl + '/dataStatistics/applyBySchoolDetail/{restfulParam}',
    method: 'get'
  })
  applyBySchoolDetail

  /**
   * 查询顶级机构列表
   */
  @createApi({ url: baseUrl + '/employInfo/queryOrgaInfo', method: 'get' })
  queryOrgaInfo

  /**
   * 查询岗位批次信息
   */
  @createApi({ url: baseUrl + '/employInfo/queryBatchEmployInfo', method: 'get' })
  queryBatchEmployInfo

  /**
   * 根据批次号查询岗位列表
   */
  @createApi({ url: baseUrl + '/employInfo/queryOneBatchPostInfo', method: 'get' })
  queryOneBatchPostInfo

  /**
   * 更新岗位标识 批量
   */
  @createApi({ url: baseUrl + '/employInfo/updateEmployListFlag' })
  updateEmployListFlag

  /**
   * 更新岗位置顶标识 批量
   */
  @createApi({ url: baseUrl + '/employInfo/updateTopFlags' })
  updateTopFlags

  /**
   * 编辑岗位信息
   */
  @createApi({ url: baseUrl + '/employInfo/updateEmployInfo/{restfulParam}' })
  updateEmployInfo

  /**
   * 分页查询笔试参数管理列表
   */
  @createApi({ url: baseUrl + '/examParam/queryByPages', method: 'GET' })
  queryExamParam

  /**
   * 查询笔试参数详情
   */
  @createApi({ url: baseUrl + '/examParam/{restfulParam}', method: 'get' })
  queryExamParamById

  /**
   * 新增/更新笔试参数详情
   */
  @createApi({ url: baseUrl + '/examParam/updateParam' })
  updateExamParam

  /**
   * 删除笔试参数
   */
  @createApi({ url: baseUrl + '/examParam/{restfulParam}', method: 'DELETE' })
  deleteExamParam

  /**
   * 分页查询笔试-面试官/阅卷官列表
   */
  @createApi({ url: baseUrl + '/checker/queryByPages', method: 'GET' })
  queryChecker

  /**
   * 查询笔试-面试官/阅卷官详情
   */
  @createApi({ url: baseUrl + '/checker/{restfulParam}', method: 'GET' })
  queryCheckerById

  /**
   * 新增/更新笔试-面试官/阅卷官详情
   */
  @createApi({ url: baseUrl + '/checker/updateChecker' })
  updateChecker

  /**
   * 删除笔试-面试官/阅卷官
   */
  @createApi({ url: baseUrl + '/checker/{restfulParam}', method: 'DELETE' })
  deleteChecker

  /**
   * 分页查询分配管理列表
   */
  @createApi({ url: baseUrl + '/corrects/queryByPages', method: 'GET' })
  queryCorrects

  /**
   * 查询分配管理详情
   */
  @createApi({ url: baseUrl + '/corrects/{restfulParam}', method: 'GET' })
  queryCorrectById

  /**
   * 更新分配操作员信息
   */
  @createApi({ url: baseUrl + '/corrects/updateCorrects' })
  updateCorrects

  /**
   * 删除分配
   */
  @createApi({ url: baseUrl + '/corrects/{restfulParam}', method: 'DELETE' })
  deleteCorrect

  /**
   * 查询主观题答题详情
   */
  @createApi({ url: baseUrl + '/corrects/queryCorrect' })
  queryCorrectAnswer

  /**
   * 主观题评分
   */
  @createApi({ url: baseUrl + '/corrects/updateCorrect' })
  updateCorrect

  /**
   * 上传导入申请表数据
   */
  @createApi({ url: baseUrl + '/applyPositionInf/updateImportResume', contentType: 'form' })
  uploadImportResumes

  /**
   * 获取场次监控截图列表
   */
  @createApi({ url: baseUrl + '/checker/getExamPhotos' })
  getExamPhotos

  /**
   * 导出社招岗位申请表excel
   */
  @createApi({ url: baseUrl + '/applyPositionInf/exportForSocial', method: 'GET' })
  exportForSocial

  /**
   * 导出校招岗位申请表excel
   */
  @createApi({ url: baseUrl + '/applyPositionInf/exportResume' })
  exportResume

  /**
   * 查询导出excel结果
   */
  @createApi({ url: baseUrl + '/applyPositionInf/exportResult', custom: true, closeLoading: true })
  exportResult

  /**
   * 按批次（即岗位选择全部）异步导出可修改excel
   */
  @createApi({
    url: baseUrl + '/applyPositionInf/exportAndUpdateAsyns'
  })
  exportAndUpdateAsyns

  /**
   * 按批次（即岗位选择全部）异步导入excel数据
   */
  @createApi({ url: baseUrl + '/applyPositionInf/updateImportResumeAsyns', contentType: 'form' })
  updateImportResumeAsyns

  /**
   * 查询按批次（即岗位选择全部）异步导入excel数据任务状态
   */
  @createApi({ url: baseUrl + '/applyPositionInf/queryImportStatus', custom: true, closeLoading: true })
  queryImportStatus

  /**
   * 按批次（即岗位选择全部）异步导入word
   */
  @createApi({ url: baseUrl + '/applyPositionInf/exportWordsAsync' })
  exportWordsAsync

  /**
   * 按条异步导出word
   */
  @createApi({
    url: baseUrl + '/applyPositionInf/wordsIdsAsync'
  })
  wordsIdsAsync

  /**
   * 查询导出任务列表
   */
  @createApi({ url: baseUrl + '/applyThread/queryExportJob', method: 'get' })
  queryExportJob

  /**
   * 根据导出任务文件名查询下载链接
   */
  @createApi({
    url: baseUrl + '/applyThread/queryExportUrl'
  })
  queryExportUrl

  /**
   * 导入第三方成绩
   */
  @createApi({ url: baseUrl + '/exam/uploadExam', contentType: 'form' })
  uploadExam

  /**
   * 根据父级id查询省市资料
   */
  @createApi({ url: baseUrl + '/pmhSpmaBase/queryArea', contentType: 'form' })
  queryArea

  /**
   * 分页查询待入职人员列表
   */
  @createApi({ url: baseUrl + '/stayEntry/queryStayers', method: 'get' })
  queryStayers

  /**
   * 待入职人员发送短信
   */
  @createApi({ url: baseUrl + '/stayEntry/sendMessage', contentType: 'form' })
  sendMessageToStayers

  /**
   * 导入hr系统
   */
  @createApi({ url: baseUrl + '/stayEntry/sendHr', contentType: 'form' })
  sendHr

  /*
   * 查询笔试成绩
   */
  @createApi({ url: baseUrl + '/exam/queryExamScore', contentType: 'form' })
  queryExamScore

  /**
   * 上传补录说明pdf
   */
  @createApi({
    url: baseUrl + '/applyResumeInf/uploadResumeNotice',
    contentType: 'form'
  })
  uploadResumeNotice

  /**
   * 删除补录说明pdf
   */
  @createApi({
    url: baseUrl + '/applyResumeInf/deleteResumeNotice'
  })
  deleteResumeNotice

  /**
   * 查询补录说明pdf
   */
  @createApi({
    url: baseUrl + '/applyResumeInf/queryResumeNotice'
  })
  queryResumeNotice
  // 考试管理相关

  /**
   * 学习情况查询
   */
  @createApi({ url: Url + '/learn/query/learnInfo', contentType: 'json', isEmployManager: true })
  queryStudyCase

  /**
   * 学习情况详情查询
   */
  @createApi({ url: Url + '/learn/query/learnDetail', contentType: 'json', isEmployManager: true })
  queryStudyCaseDetail

  /**
   * 考试任务列表查询
   */
  @createApi({ url: Url + '/exam/task/taskInfo/query', contentType: 'json', isEmployManager: true })
  queryTasklist

  /**
   * 考试情况总体查询
   */
  @createApi({ url: Url + '/exam/result/query/examResult', contentType: 'json', isEmployManager: true })
  queryTaskCaseList

  /**
   * 考试情况详情查询
   */
  @createApi({ url: Url + '/exam/result/query/answerCard', contentType: 'json', isEmployManager: true })
  queryTaskCaseDetail

  /**
   * 考试详情查询
   */
  @createApi({ url: Url + '/exam/task/taskDetail/query', contentType: 'json', isEmployManager: true })
  queryTaskDetail

  /**
   * 查询大小类信息
   */
  @createApi({ url: Url + '/busi/result/query/BusiDefine', contentType: 'json', isEmployManager: true })
  querybigSmallClass

  /**
   * 查询题库列表信息
   */
  @createApi({ url: Url + '/item/result/query/QuestionInfo', contentType: 'json', isEmployManager: true })
  querybaseList

  /**
   * 删除题库题目
   */
  @createApi({ url: Url + '/item/result/delete/QuestionInfo', contentType: 'json', isEmployManager: true })
  deleBaseListItem

  /**
   * 考试管理新增大小类
   */
  @createApi({ url: Url + '/busi/result/insert/BusiDefine', contentType: 'json', isEmployManager: true })
  addBigSmallClass

  /**
   * 考试管理大类已存在、增加小类
   */
  @createApi({ url: Url + '/busi/result/insert/Busibybig', contentType: 'json', isEmployManager: true })
  addBigsmallClass

  /**
   * 考试管理删除小类
   */
  @createApi({ url: Url + '/busi/result/delete/smallBusi', contentType: 'json', isEmployManager: true })
  deleSmallClass

  /**
   * 考试管理删除大类
   */
  @createApi({ url: Url + '/busi/result/delete/bigBusi', contentType: 'json', isEmployManager: true })
  deleBigClass

  /**
   * 考试管理新增题目随机/全部命中
   */
  @createApi({ url: Url + '/item/result/insert/QuestionInfo', contentType: 'json', isEmployManager: true })
  addSubjectRandom

  /**
   * 考试管理新增题目组合命中
   */
  @createApi({ url: Url + '/comb/rule/info/create', contentType: 'json', isEmployManager: true })
  addSubjectComb

  /**
   * 考试管理修改题目随机/全部命中
   */
  @createApi({ url: Url + '/item/result/update/QuestionInfo', contentType: 'json', isEmployManager: true })
  modifySubjectRandom

  /**
   * 考试管理修改题目组合命中
   */
  @createApi({ url: Url + '/comb/rule/info/update', contentType: 'json', isEmployManager: true })
  modifySubjectComb

  /**
   * 考试管理新增考试任务
   */
  @createApi({ url: Url + '/exam/task/examInfo/create', contentType: 'json', isEmployManager: true })
  examTaskAdd

  /**
   * 考试管理新增练习任务
   */
  @createApi({ url: Url + '/exam/task/practiceInfo/create', contentType: 'json', isEmployManager: true })
  examTaskExeAdd

  /**
   * 考试管理删除任务
   */
  @createApi({ url: Url + '/exam/task/taskInfo/delete', contentType: 'json', isEmployManager: true })
  examTaskDele

  /**
   * 考试管理考试任务修改
   */
  @createApi({ url: Url + '/exam/task/examInfo/update', contentType: 'json', isEmployManager: true })
  examTaskModify

  /**
   * 考试管理练习任务修改
   */
  @createApi({ url: Url + '/exam/task/practiceInfo/update', contentType: 'json', isEmployManager: true })
  examTaskExeModify

  /**
   * 考试管理考试任务关闭
   */
  @createApi({ url: Url + '/exam/task/examInfo/cancel', contentType: 'json', isEmployManager: true })
  examTaskExeClose

  /**
   * 查询笔试成绩
   */
  @createApi({ url: baseUrl + '/exam/queryExamScore', contentType: 'form' })
  queryExamScore

  /**
   * 校招统计
   */
  @createApi({ url: baseUrl + '/dataStatistics/queryPositionNum/{restfulParam}', method: 'get' })
  queryPositionNumber

  /**
   * 分页条件查询宣讲会学校列表信息
   */
  @createApi({ url: baseUrl + '/preachSchool/getSchoolList', method: 'get' })
  getSchoolList

  /**
   * 分页条件查询宣讲会学校列表信息
   */
  @createApi({ url: baseUrl + '/preachSchool/getSchoolList', method: 'get', closeLoading: true })
  getSchoolListWithoutLoading

  /**
   * 分页条件查询宣讲会学校用户签到列表信息
   */
  @createApi({ url: baseUrl + '/preachSchool/getList', method: 'get' })
  getListBatchNo

  /**
   * 新增宣讲会学校
   */
  @createApi({ url: baseUrl + '/preachSchool/add' })
  addTalkTalbe

  /**
   * 查询宣讲会学校详情信息
   */
  @createApi({ url: baseUrl + '/preachSchool/get', method: 'get' })
  getSchoolInfo

  /**
   * 删除宣讲会学校
   */
  @createApi({ url: baseUrl + '/preachSchool/delete' })
  deleteSchoolInfo

  /**
   * 简历投递记录批量取消
   */
  @createApi({ url: baseUrl + '/applyPositionInf/deliverCancel' })
  deliverCancel

  /**
   * 校验token
   */
  @createApi({ url: baseUrl + '/hzzpImLogin/checkToken', method: 'get', notNeedAuth: true })
  checkToken

  /**
   * 拉黑名单
   */
  @createApi({ url: baseUrl + '/company/exam/blacklist' })
  blackList

  /**
   * 登录token校验
   */
  @createApi({ url: baseUrl + '/evaluation/HRCheckToken', method: 'get', notNeedAuth: true, custom: true })
  HRCheckToken

  /**
   * 查询部室/机构年度测评列表信息
   */
  @createApi({ url: baseUrl + '/evaluation/query', method: 'get' })
  queryEvaluteList

  /**
   * 获取部室机构信息
   */
  @createApi({ url: baseUrl + '/evaluation/organInfos', method: 'get' })
  organInfos

  /**
   * 查询当前机构中高级操作员基本信息
   */
  @createApi({ url: baseUrl + '/evaluation/organ/employees', method: 'get' })
  organEmployees

  /**
   * 查询当前员工信息
   */
  @createApi({ url: baseUrl + '/evaluation/employee', method: 'get' })
  queryEmployee

  /**
   * 生成机构测评相关信息
   */
  @createApi({ url: baseUrl + '/evaluation/create', contentType: 'form' })
  createOrgan

  /**
   * 作废当前机构场次测评信息
   */
  @createApi({ url: baseUrl + '/evaluation/invalid', method: 'get' })
  invalidOrgan

  /**
   * 计算分数选择可选年份列表
   */
  @createApi({ url: baseUrl + '/evaluation/statisticsYear', method: 'get' })
  getStatisticsYear

  /**
   * 统计并查看统计结果信息
   */
  @createApi({ url: baseUrl + '/evaluation/statistics', method: 'get' })
  queryStatisList

  /**
   * 将测评结果推送HR系统
   */
  @createApi({ url: baseUrl + '/evaluation/statistics/sendToHR', method: 'get' })
  sendToHR

  /**
   * 查询当前时间段简历可操作性标识
   */
  @createApi({ url: baseUrl + '/company/getTimeFlag', method: 'get' })
  getTimeFlag

  /**
   * 简历可操作性标记更换
   */
  @createApi({ url: baseUrl + '/company/timeFlag' })
  changeTimeFlag

  /**
   * 缓存按钮
   */
  @createApi({ url: baseUrl + '/cache/refresh' })
  refresh

  /**
   * 分页查询考试批次信息列表
   */
  @createApi({ url: baseUrl + '/examBatch/list', method: 'get' })
  examPageList

  /**
   * 民主测评生成二维码
   */
  @createApi({ url: baseUrl + '/evaluation/getLoginInviteCode', method: 'get' })
  getLoginInviteCode

  /*
   * 岗位内推设定
   */
  @createApi({ url: baseUrl + '/employInfo/updateReferEmployInfo' })
  updateReferEmployInfo

  /**
   * 查询面试分组信息列表
   */
  @createApi({ url: baseUrl + '/interviewGroup/list', method: 'get' })
  queryInterviewGroupList

  /**
   * 新增修改面试分组信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/add' })
  addInterViewGroup

  /**
   * 删除面试分组信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/delete' })
  deleteInterviewGroup

  /**
   * 复制项目分组
   */
  @createApi({ url: baseUrl + '/interviewGroup/copyGroup' })
  copyGroup

  /**
   * 新增修改面试官信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/addInterviewers' })
  addInterviewers

  /**
   * 获取分组面试官信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/getInterviewers', method: 'get' })
  getInterviewers

  /**
   * 删除分组面试官信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/deleteInterviewer' })
  deleteInterviewer

  /**
   * 查询分组人员信息列表
   */
  @createApi({ url: baseUrl + '/interviewGroup/getCandidate', method: 'get' })
  getCandidate

  /**
   * 删除分组人员信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/deleteCandidate' })
  deleteCandidate

  /**
   * 新增修改分组人员信息
   */
  @createApi({ url: baseUrl + '/interviewGroup/addCandidate' })
  addCandidate

  /**
   * 查询可用面试分组信息列表
   */
  @createApi({ url: baseUrl + '/interviewGroup/groupList', method: 'get' })
  getInterviewGroupList

  /**
   * 申请表记录设置分组
   */
  @createApi({ url: baseUrl + '/interviewGroup/setGroup' })
  setInterviewGroup

  /**
   * 查询操作员信息列表
   */
  @createApi({ url: baseUrl + '/interviewGroup/getAdminList', method: 'get' })
  getAdminList

  /**
   * 查询操作员信息列表
   */
  @createApi({ url: baseUrl + '/interviewGroup/getAdminList', method: 'get', closeLoading: true })
  getAdminListWithoutLoading

  /**
   * 查询面试评价信息表列表
   */
  @createApi({ url: baseUrl + '/aspect/list', method: 'get' })
  getAspectList

  /**
   * 新增面试评价信息表
   */
  @createApi({ url: baseUrl + '/aspect/addAspect' })
  addAspect

  /**
   * 删除面试评价信息表
   */
  @createApi({ url: baseUrl + '/aspect/deleteAspect' })
  deleteAspect

  /**
   * 新增批次下面试评价信息表
   */
  @createApi({ url: baseUrl + '/aspect/addBatch' })
  addAspectByBatch

  /**
   * 新增批次-岗位下面试评价信息表
   */
  @createApi({ url: baseUrl + '/aspect/addPosition' })
  addAspectByPosition

  /**
   * 删除批次/岗位下面试评价信息表
   */
  @createApi({ url: baseUrl + '/aspect/delete' })
  deleteBindingAspect

  /**
   * 查询有效的面试评价表列表
   */
  @createApi({ url: baseUrl + '/aspect/getList', method: 'get' })
  getAvailableAspectList

  /**
   * 微简历发送短信
   */
  @createApi({ url: baseUrl + '/employer/sendEmployerMsg' })
  sendEmployerMsg

  /**
   * 调剂岗位
   */
  @createApi({ url: baseUrl + '/applyPositionInf/swapPosition' })
  swapPosition

  /*
   * 2021.06.16
   * 查询外包公司信息列表
   */
  @createApi({ url: baseUrl + '/examBatch/companyList', method: 'get' })
  companyList

  /**
   * 查询场次信息列表
   */
  @createApi({ url: baseUrl + '/examBatch/sceneList', method: 'get' })
  sceneList

  /**
   * 新增/修改考试批次信息
   */
  @createApi({ url: baseUrl + '/examBatch/batch' })
  batchChange

  /**
   * 删除考试批次信息
   */
  @createApi({ url: baseUrl + '/examBatch/delete', method: 'post' })
  examDelete

  /**
   * 查询考试批次信息详情
   */
  @createApi({ url: baseUrl + '/examBatch/get', method: 'get' })
  examBatchGet

  /**
   * 获取外包岗位信息列表
   */
  @createApi({ url: baseUrl + '/scene/positionList', method: 'get' })
  positionList

  /**
   * 查询批次信息
   */
  @createApi({ url: baseUrl + '/examBatch/batchList', method: 'get' })
  batchList

  /*
   * 合并批次
   */
  @createApi({ url: baseUrl + '/employInfo/mergeBatch' })
  mergeBatch

  /**
   * 阅卷者分组
   */
  @createApi({ url: baseUrl + '/checker/allotCheckers' })
  allotCheckers

  /*
   * 获取申请表面试评价表信息
   */
  @createApi({ url: baseUrl + '/aspect/getUserInfo', method: 'get' })
  getUserAspect

  /**
   * 获取简历自定义评价信息
   */
  @createApi({ url: baseUrl + '/interview/get' })
  getUserInterview

  /**
   * 分页查询宣讲会批次列表
   */
  @createApi({ url: baseUrl + '/preachBatch/queryByPage', method: 'get' })
  queryPreachBatch

  /**
   * 查询宣讲会批次详情
   */
  @createApi({ url: baseUrl + '/preachBatch/getDetail', method: 'get' })
  queryPreachBatchDetail

  /**
   * 删除宣讲会批次
   */
  @createApi({ url: baseUrl + '/preachBatch/deleteDetail', method: 'get' })
  deletePreachBatchDetail

  /**
   * 新增/编辑宣讲会批次
   */
  @createApi({ url: baseUrl + '/preachBatch/updateDetail' })
  updatePreachBatch

  /**
   * 修改测评账号信息
   */
  @createApi({ url: baseUrl + '/evaluation/updateAccountNum', method: 'get' })
  updateAccountNum

  /**
   * 停止当前机构场次测评信息
   */
  @createApi({ url: baseUrl + '/evaluation/stop', method: 'get' })
  stopOrgan

  /**
   * 测评统计数据导出
   */
  @createApi({ url: baseUrl + '/evaluationExcelFile/excel/exportStatistics', method: 'get' })
  exportStatistics

  /**
   * 上传高管和中官信息文件
   */
  @createApi({
    url: '{restfulParam}',
    transformRequest ({ file, year }) {
      const formData = new FormData()
      formData.append('file', file)
      if (year) {
        formData.append('year', year)
      }
      return formData
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  uploadManageFile

  /*
   * 宣讲会面试评价查询
   */
  @createApi({ url: baseUrl + '/preachBatch/queryInterview', method: 'get' })
  queryInterview

  @createApi({ url: baseUrl + '/evaluation/addStaff' })
  addStaff

  /**
   * 删除管理人员
   */
  @createApi({ url: baseUrl + '/evaluation/removeStaff', method: 'get' })
  removeStaff

  /**
   * 测评新增修改
   */
  @createApi({ url: baseUrl + '/preachBatch/staticInterview', method: 'get' })
  staticInterview

  /*
   * 内推详情列表
   */
  @createApi({ url: baseUrl + '/inviteReferred/list', method: 'get' })
  queryInviteReferredList

  /**
   * 除总行部室外各二级机构内推统计列表
   */
  @createApi({ url: baseUrl + '/inviteReferred/statictisAll', contentType: 'form' })
  statictisAll

  /**
   * 总行部室下三级机构内推统计数据列表
   */
  @createApi({ url: baseUrl + '/inviteReferred/statictisHead', contentType: 'form' })
  statictisHead

  /**
   * 内推统计（汇总）
   */
  @createApi({ url: baseUrl + '/inviteReferred/statistic', contentType: 'form' })
  inviteReferredStatistic

  /*
   * 查询面试评价表流水
   */
  @createApi({ url: baseUrl + '/aspect/getAspectList', method: 'get' })
  getAspectFlowList

  /**
   * 查询佐证补录列表
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/queryByPage', method: 'get' })
  queryAreaPositionInfo

  /**
   * 查询佐证补录详情
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/getAreaPositionDetail', method: 'get' })
  getAreaPositionDetail

  /**
   * 发送佐证补录短信
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/sendMessage' })
  sendAreaPositionInfoMessage

  /**
   * 佐证补录推hr
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/sendHr' })
  sendAreaPositionInfoHr

  /**
   * 佐证补录人员指派
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/appointAreaPositionInfo' })
  appointAreaPositionInfo

  /**
   * 维护招聘人员
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/updateAreaPositionInfo' })
  updateAreaPositionInfo

  /**
   * 三要素查询人员
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/queryFromApply' })
  queryAreaPositionInfoFromApply

  /**
   * 回退佐证补录
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/revertComplementFlag' })
  revertAreaPositionComplementFlag

  /**
   * 查询校招批次信息不完全数据
   */
  @createApi({ url: baseUrl + '/applyResumeInf/getIncompleteList' })
  searchImportResult

  /**
   * 面试题目筛选
   */
  @createApi({ url: baseUrl + '/meetingQuestion/queryByPages', method: 'get' })
  queryMeetingQuestionByPages

  /**
   * 修改新增题目信息
   */
  @createApi({ url: baseUrl + '/meetingQuestion/updateQuestion', contentType: 'form' })
  updateMeetingQuestion

  /**
   * 批量删除题目
   */
  @createApi({ url: baseUrl + '/meetingQuestion/deleteByIds' })
  deleteMeetingMutilQuestions

  /**
   * 批量新增（上传文件）
   */
  @createApi({ url: baseUrl + '/meetingQuestion/uploadQuestion', contentType: 'form' })
  uploadMeetingQuestion

  /**
   * 单个删除题目信息
   */
  @createApi({ url: baseUrl + '/meetingQuestion/deleteById', method: 'delete' })
  deleteMeetingQuestion

  /**
   * 根据id查询
   */
  @createApi({ url: baseUrl + '/meetingQuestion/findById', method: 'get' })
  queryMeetingQuestionById

  /*
   * 删除作证补录人员
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/deleteAreaPositionInfo' })
  deleteAreaPositionInfo

  /**
   * 获取操作员机构类型
   */
  @createApi({ url: baseUrl + '/areaPositionInfo/getOrgType' })
  getOrgType

  /**
   * 获取近5场面试官信息
   */
  @createApi({ url: baseUrl + '/admin/getRecentFiveEmp', method: 'get' })
  getRecentFiveEmp

  /**
   * 根据姓名/操作员号获取面试官信息
   */
  @createApi({ url: baseUrl + '/admin/findByNameOrOper', method: 'get' })
  findByNameOrOper

  /**
   * 查询部室/机构年度测评列表信息
   */
  @createApi({ url: baseUrl + '/inspector/query' })
  query

  /**
   * 作废当前机构场次测评信息
   */
  @createApi({ url: baseUrl + '/inspector/invalid', method: 'get' })
  invalid

  /**
   * 手动完成当前机构场次测评信息
   */
  @createApi({ url: baseUrl + '/inspector/stop', method: 'get' })
  stop

  /**
   * 生成二维码
   */
  @createApi({ url: baseUrl + '/inspector/getLoginInviteCode', method: 'get' })
  getLoginInviteCodes

  /**
   * 生成机构测评相关信息
   */
  @createApi({ url: baseUrl + '/inspector/create', contentType: 'form' })
  create

  /*
   * 岗位发布查询部门/用工地点列表
   */
  @createApi({ url: baseUrl + '/employInfo/queryBatch', method: 'get' })
  queryWorkSpaceAndOrg

  /**
   * 按批次查询发布的岗位列表
   */
  @createApi({ url: baseUrl + '/employInfo/screenOneBatchPostInfo', method: 'get' })
  screenOneBatchPostInfo

  /*
   * 查询脸谱列表
   */
  @createApi({ url: baseUrl + '/applyFacebook/list' })
  queryApplyFacebook

  /**
   * 新增/修改脸谱
   */
  @createApi({ url: baseUrl + '/applyFacebook/add', contentType: 'form' })
  addOrUpdateFacebook

  /**
   * 删除脸谱
   */
  @createApi({ url: baseUrl + '/applyFacebook/delete' })
  deleteFacebook

  /**
   * 根据脸谱查询题目列表
   */
  @createApi({ url: baseUrl + '/meetingQuestion/queryByPages', method: 'get' })
  queryMeetingQuestionByFacebook

  /**
   * 新增/修改脸谱下题目
   */
  @createApi({ url: baseUrl + '/meetingQuestion/updateQuestion', contentType: 'form' })
  updateMeetingQuestionV2

  /**
   * 删除题目
   */
  @createApi({ url: baseUrl + '/meetingQuestion/deleteById', method: 'get' })
  deleteMeetingQuestionV2

  /**
   * 新增/更新二维码定向推送场次
   */
  @createApi({ url: baseUrl + '/directPush/update', contentType: 'form' })
  updateDirectPush

  /**
   * 查询二维码定向场次列表
   */
  @createApi({ url: baseUrl + '/directPush/queryByPages', method: 'get' })
  queryDirectPush

  /**
   * 删除二维码定向场次
   */
  @createApi({ url: baseUrl + '/directPush/delete', contentType: 'form' })
  deleteDirectPush

  /**
   * 生成定向场次二维码
   */
  @createApi({ url: baseUrl + '/directPush/generateQR', contentType: 'form' })
  generateQrDirectPush

  /**
   * 批量生成定向场次二维码
   */
  @createApi({ url: baseUrl + '/directPush/multiGenerateQR', contentType: 'form' })
  multiGenerateDirectPushQR

  /**
   * 获取定向场次二维码地址
   */
  @createApi({ url: baseUrl + '/directPush/getQR', method: 'get' })
  getDirectPushQr

  /**
   * 根据批次查询所有岗位
   */
  @createApi({ url: baseUrl + '/directPush/batchEmploy', contentType: 'form' })
  queryPositionByBatchEmploy

  /**
   * 查询定向场次下岗位列表
   */
  @createApi({ url: baseUrl + '/directPush/position/mgQueryByPages', method: 'get' })
  queryDirectPushPosition

  /**
   * 新增定向场次岗位
   */
  @createApi({ url: baseUrl + '/directPush/position/add', contentType: 'form', custom: true })
  addDirectPushPosition

  /**
   * 删除定向场次岗位
   */
  @createApi({ url: baseUrl + '/directPush/position/delete' })
  deleteDirectPushPosition

  /*
   * 分页入场人员查询
   */
  @createApi({ url: baseUrl + '/outStayEntry/queryByPage', method: 'get' })
  queryAccessList

  /**
   * 入场人员单独分配
   */
   @createApi({ url: baseUrl + '/outStayEntry/allotOutStayEntryer', contentType: 'form' })
   allotOutStayEntryer

  /**
   * 入场人员随机分配
   */
  @createApi({ url: baseUrl + '/outStayEntry/allotOutStayEntryers', contentType: 'form' })
  allotOutStayEntryers

  /**
   * 查询入场人员详情
   */
   @createApi({ url: baseUrl + '/outStayEntry/queryPage', method: 'get' })
   queryAccessDetail

   /**
    * 查询机构
    */
   //  @createApi({ url: baseUrl + '/outStayEntry/getOutSourceParam' })
   //  getOutSourceParam

   /**
    * 查询批次下岗位下的面试者
    */
   @createApi({ url: baseUrl + '/outRecruitInter/getOutIntervieweeList', contentType: 'form' })
   getOutIntervieweeList

   /**
    * 将面试人员按人数分组
    */
   @createApi({ url: baseUrl + '/outRecruitInter/outGroupByCount', contentType: 'form' })
   outGroupByCount

   /**
    * 面试人员分组列表
    */
   @createApi({ url: baseUrl + '/outRecruitInter/outGroupList', contentType: 'form' })
   outGroupList

   /**
    * 根据分组id选择面试官
    */
   @createApi({ url: baseUrl + '/outRecruitInter/outInterviewersBindGroup', contentType: 'form' })
   outInterviewersBindGroup

   /**
    * 单独删除已分配的面试官
    */
    @createApi({ url: baseUrl + '/outRecruitInter/outInterviewersGroupCancel', contentType: 'form' })
    outInterviewersGroupCancel

   /**
    * 取消单独分配
    */
   @createApi({ url: baseUrl + '/outStayEntry/unAllotOutStayEntryer', contentType: 'form' })
   unAllotOutStayEntryer

   /**
    * 入场人员发送雪狼系统
    */
    @createApi({ url: baseUrl + '/outStayEntry/syncOutStayEntryers', contentType: 'form' })
   syncOutStayEntryers

   /**
    * 批次下的岗位下分组列表
    */
   @createApi({ url: baseUrl + '/outRecruitInter/outGroupList', contentType: 'form' })
   getOutGroupList

   /**
    * 查询分组详情
    */
   @createApi({ url: baseUrl + '/outRecruitInter/outNoticeCompanyList', contentType: 'form' })
   queryGroupDetail

   /**
    * 保存分组信息
    */
   @createApi({ url: baseUrl + '/outRecruitInter/editInterviewInfo', contentType: 'form' })
   editInterviewInfo

  /**
   * 分页查询外包批次
   */
  @createApi({ url: baseUrl + '/examBatch/list', method: 'get' })
  queryExamBatchList

  /**
   * 查询外包批次详情
   */
  @createApi({ url: baseUrl + '/examBatch/get', method: 'get' })
  queryExamBatchDetail

  /**
   * 修改外包批次
   */
  @createApi({ url: baseUrl + '/examBatch/batch', contentType: 'form' })
  updateExamBatch

  /**
   * 修改外包批次需求单
   */
  @createApi({ url: baseUrl + '/examBatch/updateOutDemand', contentType: 'form' })
  updateOutDemand

  /**
   * 查询外包相关参数字典表
   */
  @createApi({ url: baseUrl + '/outStayEntry/getOutSourceParam', contentType: 'form' })
  getOutSourceParam

  /**
   * 获取心理测评活动列表
   */
  @createApi({ url: baseUrl + '/beisen/getActivityList', method: 'get' })
  getActivityList

  /**
   * 获取心理测评邮件模版
   */
  @createApi({ url: baseUrl + '/beisen/getEmailTemplate', method: 'get' })
  getEmailTemplate

  /**
   * 获取心理测评短信模版
   */
  @createApi({ url: baseUrl + '/beisen/getSmsTemplate', method: 'get' })
  getSmsTemplate

  /**
   * 获取活动受测人列表
   */
  @createApi({ url: baseUrl + '/beisen/getActivityPersons', method: 'get' })
  getActivityPersons

  /**
   * 外包候选人进入面试流程 替换批次专用
   */
  @createApi({ url: baseUrl + '/company/intoInterview', contentType: 'form' })
  intoInterview

  /**
   * 催促受测者
   */
  @createApi({ url: baseUrl + '/beisen/emailAndSmsRemind', contentType: 'form' })
  emailAndSmsRemind

  /*
   * 根据外包批次号和身份证号查询简历详情
   */
  @createApi({ url: baseUrl + '/company/outResume/findByBatchNoAndIdNo', contentType: 'form' })
  findByBatchNoAndIdNo

  /**
   * 外包分组面试评价分页查询
   */
  @createApi({ url: baseUrl + '/outRecruitInter/queryOutInterviewEvaluation', contentType: 'form' })
  queryOutInterview

  /**
   * 批量查询批次下涉案情况
   */
  @createApi({ url: baseUrl + '/company/getPositive', contentType: 'form' })
  getPositive

  /**
   * 单个修改涉案情况
   */
  @createApi({ url: baseUrl + '/company/updatePositive', contentType: 'form' })
  updatePositive

  /**
   * 将人从入场名单中移除
   */
  @createApi({ url: baseUrl + '/outStayEntry/giveUpFlag', contentType: 'form' })
  giveUpFlag

  /**
   * 心理测评分页查询
   */
  @createApi({ url: baseUrl + '/outStayEntry/queryEvaluationByPage', method: 'get' })
  queryEvaluationByPage

  /**
   * 修改心理测评通过标志
   */
  @createApi({ url: baseUrl + '/outStayEntry/updateEvaluationFlag', contentType: 'form' })
  updateEvaluation

  /**
   * 导入到入场名单
   */
  @createApi({ url: baseUrl + '/outStayEntry/intoStayEntry', contentType: 'form' })
  intoStayEntry

  /**
   * 查询人工申诉列表
   */
  @createApi({ url: baseUrl + '/manualComplaint/showManualComplaint', method: 'get' })
  queryManualComplaintList

  /**
   * 操作人工申诉工单
   */
  @createApi({ url: baseUrl + '/manualComplaint/handleManualComplaint', contentType: 'form', custom: true })
  handleManualComplaint

  /**
   * 导入到入场名单
   */
  @createApi({ url: baseUrl + '/beisen/sendTestEmailAndSms', contentType: 'form' })
  sendTestEmailAndSms

  /**
   * 替换人员名单
   */
  @createApi({ url: baseUrl + '/outStayEntry/queryTransforByPage', method: 'get' })
  queryPersonsList

  /**
   * 直接进入笔试
   */
  @createApi({ url: baseUrl + '/company/intoExam', contentType: 'form' })
  intoExam

  /**
   * 分配机构查询
   */
  @createApi({ url: baseUrl + '/outStayEntry/queryOrganizationByPosition', contentType: 'form' })
  queryOrganization

  /*
   * 面试库人员分页查询
   */
  @createApi({ url: baseUrl + '/', contentType: 'form' })
  a

  /**
   * 人员调剂
   */
  @createApi({ url: baseUrl + '/', contentType: 'form' })
  b

  /**
   * 发送面试邀约
   */
  @createApi({ url: baseUrl + '/interviewLib/interviewArrangement', contentType: 'form' })
  interviewArrangement

  /**
   * 编辑面试标签
   */
  @createApi({ url: baseUrl + '/', contentType: 'form' })
  d

  /**
   * 管理员最高级别结果
   */
  @createApi({ url: baseUrl + '/', contentType: 'form' })
  e

  /**
   * 面试记录查询
   */
  @createApi({ url: baseUrl + '/', method: 'get' })
  f

  /**
   * 筛选器查询
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/queryFilters', method: 'get' })
  queryFilters

  /**
   * 筛选器维护
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/updateFilters', contentType: 'form' })
  updateFilters

  /**
   * 筛选器删除
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/deleteFilters', method: 'get' })
  deleteFilters

  /**
   * 短信模版使用查询
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/queryMsgTemplateHistory', method: 'get', custom: true })
  queryMsgTemplateHistory

  /**
   * 发送短信邀请
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/sendMsgInvite', contentType: 'form' })
  sendMsgInvite

  /**
   * 短信邀约查询
   */
  @createApi({ url: baseUrl + '/applySocialPositionInf/queryByInvite', method: 'get' })
  queryByInvite

  /**
   * 修改简历信息
   */
  @createApi({ url: baseUrl + '/company/outResume/updateResume', contentType: 'form' })
  outSourceUpdateResume

  /**
   * 编辑面试标签
   */
  @createApi({ url: baseUrl + '/interviewLib/updateLabel', contentType: 'form' })
  updateInterviewLibLabel

  /**
   * 管理员设置面试状态
   */
  @createApi({ url: baseUrl + '/interview/updateInterviewLibProStatus', contentType: 'form' })
  updateInterviewLibProStatus

  /**
   * 人员面试记录查询列表
   */
  @createApi({ url: baseUrl + '/preachBatch/queryIntervieweeEvaluation', contentType: 'form' })
  queryIntervieweeEvaluation

  /**
   * 面试人员列表查询
   */
  @createApi({ url: baseUrl + '/interviewLib/queryList', contentType: 'form' })
  queryIntervieweeList
}
export default new Api()
