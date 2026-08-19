'use client';

import { CommentFormProps } from './CommentForm.props';
import styles from './CommentForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICommentForm } from './CommentForm.interface';
import { Button, Input, TextArea } from '@/components';

export const CommentForm = ({
  blogId,
  className,
  ...props
}: CommentFormProps): React.ReactElement => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICommentForm>();

  const onSubmite = async (formData: ICommentForm) => {
    try {
      console.log(formData);
      setIsSuccess(true);
      reset();
    } catch (e) {
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmite)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder="Имя"
          error={errors.name}
        />
        <TextArea
          {...register('comment', {
            required: { value: true, message: 'Заполните текст комментария' },
          })}
          placeholder="Текст комментария"
          className={styles.description}
          error={errors.comment}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
    </form>
  );
};
