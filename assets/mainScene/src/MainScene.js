// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            type: cc.AudioClip,
            default: null
        },
        sprite: {
            type: cc.Sprite,
            default: null
        },
        speframe1: {
            type: cc.SpriteFrame,
            default: null
        },
        musicState: false,
        musicID: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    
    start () {
        cc.log("-------------------test---------------------")
        // cc.loader.loadRes("sound/music_01.mp3", cc.AudioClip,function(err, clip){
        //     var soundid = cc.audioEngine.playMusic(clip,true)
        // })
        
        this.musicID = cc.audioEngine.play(this.audio, true, 1)
        this.musicState = true
        // cc.loader.loadRes("sound/musicbg.mp3", cc.AudioClip, function(err, clip){
        //     var soundid = cc.audioEngine.play(clip,true, 1)
        //     print("--------------------adfa")
        // })
    },

    onLoad() {
        // cc.loader.loadRes("sound/musicbg.mp3", cc.AudioClip,function(err, clip){
        //     var soundid = cc.audioEngine.playMusic(clip,true)
        //     //this.audio = clip
        // })
    },
    
    play(){
        cc.log(this.musicState, this.musicID)
        if (!this.musicState) {
            cc.log("play")
            this.musicID = cc.audioEngine.play(this.audio, true, 1)
            this.musicState = true
        }
        else{
            if (this.musicID != null) {
                cc.log("stop")
                cc.audioEngine.stop(this.musicID)
                this.musicState = false
            }
        }
        
        cc.log("----------------------onBtnPlay")
    },

    changeBg(){
        cc.log("---------------onBtnbg")
        //this.sprite.
        if(this.sprite){
            this.sprite.spriteFrame = this.speframe1
            cc.log("--------------bg",this.sprite.name)
        }
    }

    // update (dt) {},
});
