import { useTheme } from 'next-themes';

import { IconAppLogo } from '@/components/icons';
import { Card } from '@/features/settings/components/card';
import { ThemeOption } from '@/features/settings/components/theme-option';
import { css } from '@/styled-system/css';
import { Flex, styled } from '@/styled-system/jsx';
import { visuallyHidden } from '@/styled-system/patterns';

export const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={css({ px: 8, py: 6, bg: 'bg', w: 'full' })}>
      <h2 className={css({ fontSize: 'xl', fontWeight: 'bold' })}>設定</h2>

      <Flex py={8} flexDir={'column'} gap={4}>
        <Card.Root>
          <Card.Header>テーマ</Card.Header>
          <Card.Body>
            <form className={css({ display: 'flex', gap: 4 })}>
              <ThemeOption
                label='ライト'
                value='light'
                variant='light'
                selected={theme !== 'dark'}
                onSelect={() => setTheme('light')}
              />
              <ThemeOption
                label='ダーク'
                value='dark'
                variant='dark'
                selected={theme === 'dark'}
                onSelect={() => setTheme('dark')}
              />
            </form>
          </Card.Body>
        </Card.Root>

        {/* 表示設定 */}
        <Card.Root>
          <Card.Header>表示設定</Card.Header>
          <Card.Body display={'flex'} gap={4} flexDir={'column'}>
            <div>
              <span>並び替え</span>
              <Flex gap={3} py={2}>
                <label>
                  <input
                    type='radio'
                    name='order'
                    value='title'
                    className={visuallyHidden()}
                  />
                  <RadioBtn data-selected>タイトル</RadioBtn>
                </label>
                <label>
                  <input
                    type='radio'
                    name='order'
                    value='author'
                    className={visuallyHidden()}
                  />
                  <RadioBtn>アーティスト</RadioBtn>
                </label>
                <label>
                  <input
                    type='radio'
                    name='order'
                    value='year'
                    className={visuallyHidden()}
                  />
                  <RadioBtn>年</RadioBtn>
                </label>
              </Flex>
            </div>

            <div>
              <span>グリッドサイズ</span>
              <Flex gap={3} py={2}>
                <label>
                  <input
                    type='radio'
                    name='size'
                    value='sm'
                    className={visuallyHidden()}
                  />
                  <RadioBtn data-selected>小</RadioBtn>
                </label>
                <label>
                  <input
                    type='radio'
                    name='size'
                    value='md'
                    className={visuallyHidden()}
                  />
                  <RadioBtn>中</RadioBtn>
                </label>
                <label>
                  <input
                    type='radio'
                    name='size'
                    value='lg'
                    className={visuallyHidden()}
                  />
                  <RadioBtn>大</RadioBtn>
                </label>
              </Flex>
            </div>
          </Card.Body>
        </Card.Root>

        {/* バージョン情報 */}
        <Card.Root>
          <Card.Header>バージョン情報</Card.Header>
          <Card.Body>
            <Flex gap={4} align={'center'}>
              <div
                className={css({
                  flexShrink: 0,
                  w: 8,
                  h: 8,
                  display: 'grid',
                  placeItems: 'center',
                  bg: 'accent',
                  borderRadius: 'md',
                })}
              >
                <IconAppLogo size={16} />
              </div>
              <div>
                <p className={css({ fontWeight: 'medium', fontSize: 'sm' })}>
                  Music Center
                </p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  バージョン 20260701
                </p>
              </div>
            </Flex>
          </Card.Body>
        </Card.Root>
      </Flex>
    </div>
  );
};

const RadioBtn = styled('div', {
  base: {
    px: 3,
    py: 2,
    rounded: 'md',
    fontSize: 'xs',
    bg: 'input-bg',
    border: '1px solid token(colors.input-border)',
    color: 'text-subtle',
    _selected: {
      borderColor: 'accent',
      bg: 'accent-dim',
      color: 'accent',
      fontWeight: 'bold',
    },
  },
});
