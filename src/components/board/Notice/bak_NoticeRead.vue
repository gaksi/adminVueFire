<template>
<div>
    <div class="notice-write">
     <!-- <div class="form-group">
        <h3>고정 순서</h3>
        <p>{{ doneNoticeOne.fix_num }}</p>
      </div>
      <div class="form-group">
        <h3>제목</h3>
        <p>{{ doneNoticeOne.title }}</p>
      </div>
      <div class="form-group">
        <h3>내용</h3>
        <div class="content-show" v-html="doneNoticeOne.content"></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list"><i class="xi-list"></i>
          목록 </router-link>
        <button type="button" @click="editMode"
                class="btn-basic btn-notice-write-done'" ><i class="xi-pen"></i> 수정</button>
        <button type="button" @click="deleteNotice" class="btn-delete btn-notice-delete'">
          <i class="xi-trash-o"></i> 삭제
        </button>
      </div>-->

      <div class="form-group">
        <h3>제목</h3>
        <p>{{ doneNoticeOne2[0].title }}</p>
      </div>
      <div class="form-group">
        <h3>작성자</h3>
        <p>{{ doneNoticeOne2[0].name }}</p>
      </div>
      <div class="form-group">
        <h3>조회수</h3>
        <p>{{ doneNoticeOne2[0].hits }}</p>
      </div>
      <div class="form-group">
        <h3>작성일</h3>
        <p>{{ doneNoticeOne2[0].date }}</p>
      </div>
      <div class="form-group">
        <h3>내용</h3>
        <div class="content-show" v-text="doneNoticeOne2[0].content"></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list"><i class="xi-list"></i>
          목록 </router-link>
        <button type="button" @click="editMode"
                class="btn-basic btn-notice-write-done'" ><i class="xi-pen"></i> 수정</button>
        <button type="button" class="btn-delete btn-notice-delete'">
          <i class="xi-trash-o"></i> 삭제 <!-- @click="deleteNotice"-->
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import CONF from '@/Config'
//import moment from 'moment'
import { create } from 'vue-modal-dialogs'
import AppDialog from '@/components/dialog/AppDialog'
import { db } from '@/firebase.js'

const confirmDelete = create(AppDialog, 'title', 'description')
// const confirmDelete2 = create(AppDialog)

export default {
  name: 'NoticeForm',
  data () {
    return {
      no: this.$route.params.no,
      num: 101,
     // notice: { id: 0, title: '', content: '', fix_num: -1, notice_time: 0 },
      notice2: []
    }
  },
  firestore: {
    notice2: db.collection('notice')
  },
  computed: {
/*    doneNoticeOne: function () {
      const timestemp = this.notice.notice_time * 1000
      const date = new Date(timestemp)
      return {
        id: this.notice.id,
        title: unescape(this.notice.title),
        content: unescape(this.notice.content),
        fix_num: this.notice.fix_num,
        notice_time: moment(date).format('YY-MM-DD')
      }
    },*/
    doneNoticeOne2: function () {
      return this.notice2.filter((item, index) => {
        console.log(this.notice2[index].num)
        console.log(String(this.num))
        return item.num === String(this.num)
      })
    }
  },
  created () {
/*    axios.post(CONF.FETCH_ONE_NOTICE, {
      id: this.no
    }).then((response) => {
      this.notice = response.data.resData[0]
    }).catch((err) => {
      console.log(err)
    })*/
  },
  methods: {
/*    deleteNotice: function () {
      confirmDelete('Delete notice', 'Are you sure you want to delete...?').then(yes => {
        if (yes) {
          axios.post(CONF.DELETE_NOTICE, {
            id: this.no
          }).then(() => {
            console.log('delete')
          }).catch((err) => {
            console.log(err)
          })
          this.$router.push({ name: 'NoticeList' })
        }
      })
    },*/
    editMode () {
      this.$router.push({ name: 'NoticeForm', query: { mode: 'edit', no: this.no },
        params: { item: this.doneNoticeOne } })
    }
  }
}
</script>
<style>

</style>
