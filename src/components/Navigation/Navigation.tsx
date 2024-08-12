import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import WorkIcon from '../assets/works_icon.svg?react';

import styles from './Navigation.module.scss';
import './style.scss';
import { Link } from '@radix-ui/themes';

const links = {
  vr: [
    {id: 0,title: 'Sandbox', url: 'https://xmov.fun/test_webxr/'},
    {id: 1,title: 'Exhibition', url: 'https://xmov.fun/vr/exhibition/'},
    {id: 2,title: 'Cubes', url: 'https://xmov.fun/vr/pointer/'},
  ],
  app3d: [
    {id: 0,title: 'Sandbox', url: 'https://xmov.fun/games/sandbox_3d/'},
    {id: 1,title: 'Exhibition', url: 'https://xmov.fun/games/exhibition/'},
    {id: 2,title: 'Pointer', url: 'https://xmov.fun/games/pointer/'},
    {id: 3,title: '3DApp', url: 'https://xmov.fun/games/3DApp/'},
    {id: 4,title: 'Game', url: 'https://xmov.fun/games/game/'},
    {id: 5,title: 'FPV', url: 'https://xmov.fun/games/fpv/'},
    {id: 6,title: 'Room', url: 'https://xmov.fun/games/room/'},
    {id: 7,title: 'Runner', url: 'https://xmov.fun/godot/runner/'},
    {id: 8,title: 'Scene', url: 'https://xmov.fun/web/scene/'},
    {id: 9,title: 'Panelka', url: 'https://xmov.fun/web/panelka/'},
    {id: 9,title: 'Walls', url: 'https://xmov.fun/web/walls/'},
    {id: 9,title: 'Coins', url: 'https://xmov.fun/games/coins/'},
  ],
  web: [
    {id: 0,title: 'Layout', url: 'https://xmov.fun/web/panning_layout/'},
    {id: 1,title: 'Animation', url: 'https://xmov.fun/web/animation/'},
    {id: 4,title: 'Animation 2', url: 'https://xmov.fun/web/animation2/'},
    {id: 2,title: 'Gallery', url: 'https://xmov.fun/web/gallery/'},
    {id: 3,title: 'UI', url: 'https://xmov.fun/web/ui/'},
    {id: 5,title: 'Vending Machine', url: 'https://xmov.fun/web/vending_machine/'},
    {id: 6,title: 'Dating', url: 'https://xmov.fun/web/dating/'},
    {id: 7,title: 'Pie', url: 'https://xmov.fun/web/pie/'},
    {id: 8,title: 'Canvas', url: 'https://xmov.fun/web/canvas/'},
    {id: 9,title: 'Tap', url: 'https://xmov.fun/games/tap/'},
    {id: 10,title: 'Shader', url: 'https://xmov.fun/web/shader/'},
    {id: 11,title: 'Grid', url: 'https://xmov.fun/web/grid/'},
  ],
}

export const Navigation = () => {
  const handler = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }
  return (
    <nav className={styles.nav}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={styles.button} aria-label="Customise options">
            <WorkIcon />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={6} align='start' alignOffset={10} side='right'>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              VR
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                {links.vr.map(l => (
                  <DropdownMenu.Item 
                    key={l.id} 
                    className="DropdownMenuItem"
                    onClick={() => handler(l.url)}
                  >
                    {l.title}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              3D App
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                {links.app3d.map(l => (
                  <DropdownMenu.Item 
                    key={l.id} 
                    className="DropdownMenuItem"
                    onClick={() => handler(l.url)}
                  >
                    {l.title}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              Web
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                {links.web.map(l => (
                  <DropdownMenu.Item 
                    key={l.id} 
                    className="DropdownMenuItem"
                    onClick={() => handler(l.url)}
                  >
                    {l.title}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  )
};
