const Conrad = {
  actions: {
    'TURN'                              : 0,
    'WALK'                              : 1,
    'HANG_DROP'                         : 2,
    'STAND_JUMP'                        : 3,
    'RUN'                               : 4,
    'START_RUN'                         : 5,
    'END_RUN'                           : 6,
    'STOP_RUN_TURN_RUN'                 : 7,
    'RUN_TO_WALK'                       : 8,
    'RUN_TO_JUMP'                       : 9,
    'LAND_TO_RUN'                       : 10,
    'CLIMB_DOWN_HANG'                   : 11,
    'STANDING_JUMP'                     : 12,
    'STOP_REBALANCE'                    : 13,
    'JUMP_CATCH'                        : 14,
    'ROLL_INTO_RUN'                     : 15,
    'SWING'                             : 16,
    'LAND'                              : 17,
    'DRAW_GUN'                          : 18,
    'SIDESTEP_WITH_GUN'                 : 19,
    'ENTER_CROUCH_WITH_GUN'             : 20,
    'CROUCH_PREPARE_TO_FIRE'            : 21,
    'GUN_OUT_TURN'                      : 22,
    'CROUCH_GUN_OUT_TURN'               : 23,
    'STAND_PREPARE_TO_FIRE'             : 24,
    'JUMP_HANG'                         : 25,
    'STAND_TO_CROUCH'                   : 26,
    'BUMP_INTO'                         : 27,
    'THROW_ITEM'                        : 28,
    'ROLL_TO_CROUCH'                    : 29,
    'AIM_STAND_CROUCH'                  : 30,
    'HANG_DROP_BAD_LANDING'             : 31,
    'JUMP_CATCH_MISS_BAD_LANDING'       : 32,
    'GUN_OUT_TURN'                      : 33,
    'STUMBLE_BACK_TO_LAY'               : 34,
    'STUMBLE_FORWARDS'                  : 35,
    'STUMBLE_FORWARD_AWAY'              : 36,
    'SIT_TO_LAY'                        : 37,
    'FACE_DOWN_TO_STAND'                : 38,
    'HANGING_SWING_1'                   : 39,
    'HANGING_SWING_2'                   : 40,
    'FALL_BACKWARDS_TO_LAY'             : 41,
    'LAY_TO_STAND'                      : 42,
    'STAND_TO_LEAN'                     : 43,
    'ROLL_TO_STOP'                      : 44,
    'STAND_JUMP_HANG'                   : 45,
    'CROUCH_GET_GUN_OUT'                : 46,
    'FIRE_GUN'                          : 47,
    'GUN_OUT_STEP_OFF_LEDGE_TO_CROUCH'  : 48,
    'CROUCH_GET_GUN_OUT_BAD_FINISH'     : 49,
    'CROUCH_GUN_OUT_TURN_2'             : 50,
    'STOOP_TO_GUN_OUT_FAST'             : 51,
    'USE_MACHINE'                       : 52,
    'WALK_QUICK_DRAW'                   : 53,
    'ROLL_TO_GUN_OUT'                   : 54,
    'CROUCH_FIRE'                       : 55,
    'STAND_READY_JUMP_UP'               : 56,
    // 'LAND_SIT'                         : 57, // ??
    'ELECTRIC_TELEPORT'                 : 57,
    'HIT_WITH_GUN'                      : 58,
    'CROUCH_TO_CENTER'                  : 59
  },


  // single item 32 x 48
  // 2 x 3 of 16 x 16 blocks
  // 1st item has 0,0, all others start 1

  // number of frames per animation
  animations: [
  	10, // turn // plus 1st one, so 0-11
  	12, // walk rtl // 1-12
  	10, // hang drop
  	18, // stand to jump
  	20, // run rtl
  	12, // start run rtl
  	12, // stop run
  	14, // stop run turn run
  	11, // run to walk rtl
  	19, // run to jump rtl
  	9,  // land to run rtl
  	25, // climb down to hang
  	20, // standing jump stand
  	17, // stop rebalance
  	7,  // jump catch
  	22, // roll into run
  	4,  // swing
  	14, // land
  	16, // get gun out
  	14, // sidestep with gun
  	6,  // enter crouch with gun
  	6,  // crouch prepare to fire
  	5,  // gun out turn rtl ??
  	6,  // crouch gun out turn rtl
  	16, // stand prepare to fire
  	14, // jump hang
  	7,  // stand to crouch
  	16, // bump into
  	33, // throw item
  	7,  // roll to crouch ??
  	6,  // aim stand to crouch
  	11, // hang drop bad landing
  	15, // jump catch miss to bad landing
  	10, // gun out turn left to right
  	20, // stumble backward to lay (maybe shot?)
  	3,  // stumble forward (maybe dead?)
  	5,  // stumble forward away (maybe dead?)
  	4,  // sit to lay (maybe dead?)
  	15, // face down to stand up
  	10, // hanging swing
  	6,  // hanging swing ??
  	7,  // fall backwards to lay (maybe dead?)
  	24, // lay down (sleeping?) to stand up
  	3,  // stand to bench-lean
  	9,  // roll to stop ??
  	8,  // stand jump hang
  	10, // crouch get gun out
  	4,  // fire gun
  	13, // gun out step off ledge to crouch
  	12, // crouch to gun out hurt before finish ??
  	10, // crouch gun out change direction
  	5,  // stoop to gun out fast
  	11, // side to face away (use machine)
  	4,  // walk to quick draw ??
  	7,  // roll end to gun out
  	2,  // crouch fire
  	13, // stand, ready jump up
  	1,  // land sit ??
  	8,  // fall into electric teleport
  	17, // hit with gun
  	4   // crouch turn to center
  ]
}

export default Conrad
