/**
 * visit
 * https://customrealms.io/
 */

import * as cr from 'your_server'; //mine is customrealms


@cr.Plugin()
export class MainPlugin implements cr.OnEnable
{

    /**
     * 
     * called when plguin is enabled
     */
    public onEnable(): void{

    }

    @cr.Command ('/hello')
    public helloCommand(player: cr.Player){
        player.SendTitle(
            'Hello Dear Friends',
            'from CustomRealms',
            20.
            60.
            20

        );
    }
    @cr.Command('/launch')
    public launchCommand(player: cr.Player){
        player.setVelocity(new cr.Vector(0, 100, 0))
    }
}


//after this go to mincraft and run /reload - just tyoe it on chatbox
//after this go to mincraft and type " /hello " w/o quotation

// by Cleverguns YT effort haha
