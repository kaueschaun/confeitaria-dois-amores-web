'use client';
import { type FC, type InputHTMLAttributes, useState } from 'react';
import colors from '../../theme/colors';
import { Column } from '../../styled/alignment/Column';
import Text from './Text';
import styles from './FieldSet.module.scss';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';

interface FieldSetProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    error?: string;
    variant?: 'rounded' | 'squared';
}

const FieldSet: FC<FieldSetProps> = ({
    label,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    error,
    variant = 'squared',
    className,
    style,
    type,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <Column
            className={clsx(styles.container, className)}
            style={{ marginTop, marginRight, marginBottom, marginLeft, ...style }}
        >
            {label && (
                <Text
                    name="personalized"
                    weight="600"
                    size="0.875rem"
                    marginBottom="8px"
                    color={colors.night}
                >
                    {label}
                </Text>
            )}
            <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                <input
                    type={inputType}
                    className={clsx(
                        styles.input,
                        {
                            [styles.inputError]: !!error,
                            [styles.inputRounded]: variant === 'rounded',
                            [styles.inputSquared]: variant === 'squared'
                        }
                    )}
                    style={{ paddingRight: isPassword ? '40px' : '1rem' }}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: '12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#9ca3af'
                        }}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
            {error && (
                <Text
                    name="small"
                    marginTop="4px"
                    color={colors.danger}
                >
                    {error}
                </Text>
            )}
        </Column>
    );
};

export default FieldSet;